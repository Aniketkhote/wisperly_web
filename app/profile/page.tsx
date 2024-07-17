import ProfileHeader from "../(home)/components/ProfileHeader";

const Profile = () => {
  return (
    <div className="flex gap-x-5 my-5 justify-center">
      <div className="w-[65vw]">
        <ProfileHeader />
      </div>
      <div className="w-[25vw]">
        <div className="bg-white rounded-lg p-5">1</div>
      </div>
    </div>
  );
};

export default Profile;
