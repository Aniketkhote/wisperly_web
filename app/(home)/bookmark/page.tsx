import { posts } from "@/utils/data";
import Post from "../components/Post";

const Bookmark = () => (
  <div className="flex">
    <div className="bg-white rounded-lg p-5 w-10/12">
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
            bookmark={true}
          />
        ))}
      </div>
    </div>
    <div className="bg-white rounded-lg p-5 w-1/3 mx-5">Bookmark Sidebar</div>
  </div>
);

export default Bookmark;
