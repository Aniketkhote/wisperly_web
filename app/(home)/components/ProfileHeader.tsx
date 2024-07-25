import { IUser } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import {
  FaBriefcase,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const ProfileHeader = ({ user }: { user: IUser }) => {
  const socialMediaAccounts = [
    { icon: FaLinkedin, url: "#" },
    { icon: FaTwitter, url: "#" },
    { icon: FaGithub, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaYoutube, url: "#" },
    { icon: FaMedium, url: "#" },
  ];

  return (
    <div className="mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative rounded-t-lg h-36 bg-gradient-to-r from-purple-500 to-indigo-500">
        <Image
          src="/images/banner.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="relative px-6 py-4 -mt-16">
        <div className="flex justify-between items-end">
          <div className="flex space-x-5">
            <div className="flex items-end">
              <div className="relative w-24 h-24 rounded-lg bg-white border-2 border-white shadow-lg overflow-hidden">
                <img
                  src="https://api.multiavatar.com/Skeleto81.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex space-x-4 items-end mb-2">
              <Link
                href={`/profile/${user.name
                  .replace(" ", "_")
                  .toLowerCase()}/network`}
                className="hover:text-blue-500 transition duration-300"
              >
                <span className="font-semibold">6,476</span>{" "}
                <span className="text-sm">Followers</span>
              </Link>
              <Link
                href={`/profile/${user.name
                  .replace(" ", "_")
                  .toLowerCase()}/network`}
                className="hover:text-blue-500 transition duration-300"
              >
                <span className="font-semibold ">500+</span>{" "}
                <span className="text-sm">Connections</span>
              </Link>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded-full transition duration-300">
              Connect
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-1 px-4 rounded-full transition duration-300">
              Message
            </button>
          </div>
        </div>
        <div className="my-2 text-sm">
          <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 flex items-center mt-1">
            <FaBriefcase className="mr-2 text-gray-500" />
            {user.role}
          </p>
          <p className="text-gray-600 flex items-center mt-1">
            <FaLocationPin className="mr-2 text-gray-500" />
            Seoul, South Korea
          </p>
        </div>
        <p className="text-gray-600 my-2 text-sm">
          Passionate product designer with 8+ years of experience in creating
          user-centered digital solutions. Specializing in mobile app design and
          design systems. Always eager to tackle complex problems and create
          intuitive, beautiful interfaces.
        </p>
        <div className="flex items-center space-x-3">
          {socialMediaAccounts.map(
            (account, index) =>
              account.url && (
                <a
                  key={index}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 hover:text-white hover:bg-indigo-500 p-1 rounded-full transition duration-300`}
                >
                  <account.icon size={18} />
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
