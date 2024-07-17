import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const ProfileHeader = () => {
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
          <div className="flex items-end">
            <div className="relative w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src="https://api.multiavatar.com/Skeleto81.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
              Connect
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-4 rounded-full transition duration-300">
              Message
            </button>
          </div>
        </div>
        <div className="my-2">
          <h2 className="text-xl font-bold text-gray-800">Jesselyn Wang</h2>
          <p className="text-gray-600 flex items-center mt-1">
            <FaBriefcase className="mr-2 text-gray-500" />
            Lead Product Designer at Apple
          </p>
          <p className="text-gray-600 flex items-center mt-1">
            <FaLocationPin className="mr-2 text-gray-500" />
            Seoul, South Korea
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-6">
          <Link
            href={`/profile/1/network`}
            className="hover:text-blue-500 transition duration-300"
          >
            <span className="font-semibold text-gray-800">6,476</span> followers
          </Link>
          <Link
            href={`/profile/1/network`}
            className="hover:text-blue-500 transition duration-300"
          >
            <span className="font-semibold text-gray-800">500+</span>{" "}
            connections
          </Link>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
        <p className="text-gray-600">
          Passionate product designer with 8+ years of experience in creating
          user-centered digital solutions. Specializing in mobile app design and
          design systems. Always eager to tackle complex problems and create
          intuitive, beautiful interfaces.
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
