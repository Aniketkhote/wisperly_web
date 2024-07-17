import ProfileHeader from "@/app/(home)/components/ProfileHeader";

const Profile = () => {
  return (
    <div className="flex gap-x-5 my-5">
      <div className="w-1/3">
        <h1></h1>
      </div>
      <div className="w-10/12">
        <ProfileHeader />
      </div>
      <div className="w-1/3">
        <h1></h1>
      </div>
    </div>
  );
};

export default Profile;
