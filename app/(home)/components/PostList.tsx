import Post from "./Post";

const posts = [
  {
    userImg: "https://api.multiavatar.com/Skeleto28.png",
    userName: "Cameron Williamson",
    date: "23 Aug at 4:21 PM",
    text: "Loving the new updates on this platform. Great job, team!",
    postImg: ["https://via.placeholder.com/600?text=Image1"],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: "https://api.multiavatar.com/Skeleto5.png",
    userName: "Cameron Williamson",
    date: "23 Aug at 4:21 PM",
    text: "Just visited an amazing restaurant! The food was fantastic and the ambiance was perfect.",
    postImg: [],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: "https://api.multiavatar.com/Skeleto3.png",
    userName: "Cameron Williamson",
    date: "23 Aug at 4:21 PM",
    text: "Check out this cool coffee shop I found downtown. The coffee is to die for!",
    postImg: [
      "https://via.placeholder.com/600?text=Image1",
      "https://via.placeholder.com/600?text=Image2",
    ],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: "https://api.multiavatar.com/Skeleto18.png",
    userName: "Cameron Williamson",
    date: "23 Aug at 4:21 PM",
    text: "Check out this cool coffee shop I found downtown. The coffee is to die for!",
    postImg: [
      "https://via.placeholder.com/600?text=Image1",
      "https://via.placeholder.com/600?text=Image2",
      "https://via.placeholder.com/600?text=Image3",
      "https://via.placeholder.com/600?text=Image4",
      "https://via.placeholder.com/600?text=Image5",
      "https://via.placeholder.com/600?text=Image6",
    ],
    likes: "30",
    comments: "12",
    shares: "5",
  },
  {
    userImg: "https://api.multiavatar.com/Skeleto18.png",
    userName: "Cameron Williamson",
    date: "23 Aug at 4:21 PM",
    text: "Check out this cool coffee shop I found downtown. The coffee is to die for!",
    postImg: [
      "https://via.placeholder.com/600?text=Image1",
      "https://via.placeholder.com/600?text=Image2",
      "https://via.placeholder.com/600?text=Image3",
    ],
    likes: "30",
    comments: "12",
    shares: "5",
  },
];

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
        />
      ))}
    </div>
  );
};

export default PostList;
