"use client";

import { podPosts, pods, suggestions } from "@/utils/data";
import { IComment, IPod, IPodPost, IUser } from "@/utils/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PodView = () => {
  const params = useParams<{ slug: string }>();
  const [pod, setPod] = useState<IPod | null>(null);
  const [posts, setPosts] = useState<IPodPost[]>([]);
  const [newPost, setNewPost] = useState("");
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    // Simulating API calls
    const fetchPod = async () => {
      const foundPod = pods.find(
        (p) => p.name.replace(" ", "-").toLowerCase() === params.slug
      );
      setPod(foundPod || null);
    };

    const fetchPosts = async () => {
      // Simulated API call to get posts
      const fetchedPosts: IPodPost[] = [
        { ...podPosts },
        {
          id: 2,
          author: suggestions[0],
          content:
            "Hello everyone! Excited to be part of this pod. What's everyone working on?",
          likes: 5,
          comments: [],
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 3,
          author: suggestions[1],
          content:
            "Just finished an amazing book on AI ethics. Anyone interested in a discussion?",
          likes: 3,
          comments: [],
          createdAt: new Date(Date.now() - 3600000).toISOString(),
        },
      ];
      setPosts(fetchedPosts);
    };

    const fetchCurrentUser = async () => {
      // Simulated API call to get current user
      setCurrentUser({
        id: 1,
        src: "https://api.multiavatar.com/Skeleto81.png",
        name: "Roger Korsgaard",
        role: "UX Designer",
      });
    };

    fetchPod();
    fetchPosts();
    fetchCurrentUser();
  }, [params.slug]);

  const handlePostSubmit = () => {
    if (newPost.trim() && currentUser) {
      const newPostObj: IPodPost = {
        id: Date.now(),
        author: currentUser,
        content: newPost,
        likes: 0,
        comments: [],
        createdAt: new Date().toISOString(),
      };
      setPosts([newPostObj, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (postId: number, isLiked: boolean) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + (isLiked ? 1 : -1) }
          : post
      )
    );
  };

  const handleComment = (postId: number, commentContent: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: 1,
                  author: suggestions[0],
                  content: commentContent,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : post
      )
    );
  };

  if (!pod) return <div>Pod not found</div>;

  return (
    <div className="flex items-start max-w-7xl mx-auto">
      <div className="w-2/3 ml-5 mr-10">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={`/${pod.imageUrl}`}
              alt={pod.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-60 px-6 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                  {pod.name}
                </h1>
                <p className="text-sm text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                  {pod.members} members
                </p>
              </div>
              <p className="text-gray-200 mb-2 leading-relaxed">
                {pod.description}
              </p>
            </div>
          </div>
          <div className="p-6">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg mb-3 transition duration-200 ease-in-out resize-none"
              rows={3}
              placeholder="Share your thoughts with the pod..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="px-6 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                onClick={handlePostSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <PostList
            posts={posts}
            onLike={handleLike}
            onComment={handleComment}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 w-1/3 mr-10">
        <PodSidebar pod={pod} />
      </div>
    </div>
  );
};

export default PodView;

import { FaComment, FaPaperPlane, FaThumbsUp } from "react-icons/fa";
import PodSidebar from "../../components/PodSidebar";

const PostItem = ({
  post,
  onLike,
  onComment,
}: {
  post: IPodPost;
  onLike: Function;
  onComment: Function;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [visibleComments, setVisibleComments] = useState(3);
  const [replyInputs, setReplyInputs] = useState<{ [key: number]: string }>({});
  const [comments, setComments] = useState(post.comments);
  const [showReplyInput, setShowReplyInput] = useState<{
    [key: number]: boolean;
  }>({});

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id, !isLiked);
  };

  const handleCommentSubmit = (parentId: number | null = null): void => {
    const commentText = parentId ? replyInputs[parentId] : newComment;
    if (commentText && commentText.trim()) {
      const newCommentObj: IComment = {
        id: Date.now(), // This should be replaced with a proper ID from the backend
        author: suggestions[0], // This should be the current user's info
        content: commentText,
        createdAt: new Date().toISOString(),
      };

      if (parentId) {
        setComments((prevComments: IComment[]) =>
          addReply(prevComments, parentId, newCommentObj)
        );
        setReplyInputs((prev: { [key: number]: string }) => ({
          ...prev,
          [parentId]: "",
        }));
      } else {
        setComments((prevComments: IComment[]) => [
          newCommentObj,
          ...prevComments,
        ]);
        setNewComment("");
      }

      onComment(post.id, commentText, parentId);
    }
  };

  const addReply = (
    comments: IComment[],
    parentId: number,
    newReply: IComment
  ): IComment[] => {
    return comments.map((comment: IComment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [newReply, ...(comment.replies || [])],
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: addReply(comment.replies, parentId, newReply),
        };
      }
      return comment;
    });
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    parentId: number | null = null
  ) => {
    if (e.key === "Enter") {
      handleCommentSubmit(parentId);
    }
  };

  const handleReplyClick = (commentId: number) => {
    setShowReplyInput((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  const handleCommentLike = (commentId: number) => {
    // Implement comment like functionality here
    console.log(`Liked comment ${commentId}`);
  };

  const handleAddMoreComments = () => {
    setVisibleComments((prevVisible) => prevVisible + 3);
  };

  const renderComment = (comment: IComment, level: number = 0) => (
    <div
      key={comment.id}
      className={`bg-gray-50 p-2 rounded mt-2 ${level > 0 ? "ml-4" : ""}`}
    >
      <div className="flex items-center">
        <img
          src={comment.author.src}
          alt={comment.author.name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <p className="text-sm font-semibold">{comment.author.name}</p>
      </div>
      <p className="text-sm mt-1">{comment.content}</p>
      <div className="mt-2 flex space-x-4">
        <button
          onClick={() => handleCommentLike(comment.id)}
          className="text-sm text-gray-500 hover:text-indigo-500"
        >
          Like
        </button>
        {level < 2 && (
          <button
            onClick={() => handleReplyClick(comment.id)}
            className="text-sm text-gray-500 hover:text-indigo-500"
          >
            Reply
          </button>
        )}
      </div>
      {level < 2 && showReplyInput[comment.id] && (
        <div className="mt-2 flex">
          <input
            type="text"
            value={replyInputs[comment.id] || ""}
            onChange={(e) =>
              setReplyInputs((prev) => ({
                ...prev,
                [comment.id]: e.target.value,
              }))
            }
            onKeyUp={(e) => handleKeyPress(e, comment.id)}
            placeholder="Write a reply..."
            className="flex-grow px-2 border rounded-l-md focus:outline-none text-sm"
          />
          <button
            onClick={() => handleCommentSubmit(comment.id)}
            className="bg-indigo-500 text-white p-2 rounded-r-md hover:bg-indigo-600"
          >
            <FaPaperPlane />
          </button>
        </div>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2">
          {comment.replies.map((reply) => renderComment(reply, level + 1))}
        </div>
      )}
    </div>
  );

  const totalCommentCount = (comments: IComment[]): number => {
    return comments.reduce((count, comment) => {
      return (
        count + 1 + (comment.replies ? totalCommentCount(comment.replies) : 0)
      );
    }, 0);
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <img
          src={post.author.src}
          alt={post.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="mt-2">{post.content}</p>
      <div className="mt-4 flex items-center space-x-4">
        <button
          className={`flex items-center ${
            isLiked ? "text-indigo-500" : "text-gray-500"
          } hover:text-indigo-600`}
          onClick={handleLike}
        >
          <FaThumbsUp className="mr-1" />
          <span>{post.likes}</span>
        </button>
        <button
          className="flex items-center text-gray-500 hover:text-indigo-500"
          onClick={() => setShowComments(!showComments)}
        >
          <FaComment className="mr-1" />
          <span>{totalCommentCount(post.comments)}</span>
        </button>
      </div>
      {showComments && (
        <div className="mt-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyUp={(e) => handleKeyPress(e)}
              placeholder="Write a comment..."
              className="flex-grow p-2 border rounded-l-md focus:outline-none"
            />
            <button
              onClick={() => handleCommentSubmit()}
              className="bg-indigo-500 text-white p-3 rounded-r-md hover:bg-indigo-600"
            >
              <FaPaperPlane />
            </button>
          </div>
          <div className="space-y-2 mb-4">
            {comments
              .slice(0, visibleComments)
              .map((comment: IComment) => renderComment(comment))}
          </div>
          {visibleComments < comments.length && (
            <button
              onClick={handleAddMoreComments}
              className="text-indigo-500 hover:text-indigo-600 text-sm"
            >
              More comments
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const PostList = ({
  posts,
  onLike,
  onComment,
}: {
  posts: IPodPost[];
  onLike: Function;
  onComment: Function;
}) => {
  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
        />
      ))}
    </div>
  );
};
