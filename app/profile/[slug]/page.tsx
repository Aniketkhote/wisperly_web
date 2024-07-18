"use client";

import ProfileHeader from "@/app/(home)/components/ProfileHeader";
import { suggestions } from "@/utils/data";
import { IUser } from "@/utils/types";
import { useParams } from "next/navigation";

const Profile = () => {
  const params = useParams<{ slug: string }>();

  const user: IUser = suggestions.filter(
    (u) => u.name.replace(" ", "_").toLowerCase() == params.slug
  )[0];

  return (
    <div className="flex gap-x-5 my-5">
      <div className="w-1/3">
        <h1></h1>
      </div>
      <div className="w-10/12">
        <ProfileHeader user={user} />
      </div>
      <div className="w-1/3">
        <h1></h1>
      </div>
    </div>
  );
};

export default Profile;
