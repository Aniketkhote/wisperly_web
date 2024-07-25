import { posts } from "@/utils/data";
import Post from "./Post";

const PostList = () => {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Post
          key={index}
          userImg={post.userImg}
          userName={post.userName}
          date={post.date}
          text={post.text}
          postImg={post.postImg}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
          bookmark={index % 2 == 0}
        />
      ))}
    </div>
  );
};

export default PostList;
