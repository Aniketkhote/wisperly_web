import PostCreationBox from "./components/CreatePost";
import RightSidebar from "./components/FeedSidebar";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <div className="flex gap-x-5">
      <div className="w-10/11 px-10">
        {/* <StorySection /> */}
        <PostCreationBox />
        <PostList />
      </div>
      <div className="w-1/3 mr-5">
        <RightSidebar />
      </div>
    </div>
  );
}
