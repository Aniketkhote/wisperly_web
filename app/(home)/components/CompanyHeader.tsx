import { FaLocationPin } from "react-icons/fa6";

const CompanyHeader = () => {
  return (
    <>
      <div className="relative rounded-t-lg h-36 bg-gradient-to-r from-purple-500 to-indigo-500">
        {/* <Image
       src="/background-image-url.jpg"
       alt="Background"
       layout="fill"
       objectFit="cover"
       className="w-full h-full"
     /> */}
      </div>
      <div className="p-5 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <img
            src="https://api.multiavatar.com/Skeleto81.png"
            className="relative w-20 h-20 -mt-16"
            alt="profile"
          />
          <div className="flex gap-x-2">
            <button className="border bg-indigo-500 text-white rounded-md text-sm px-2 py-1">
              Connect
            </button>
          </div>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold">QuantumPeak Solutions</h2>
          <p className="text-gray-600 text-sm flex items-center">
            <span className="mr-1">
              <FaLocationPin className="text-slate-500 h-3" />
            </span>
            Seoul, South Korea
          </p>
          <p className="text-sm py-2">
            Innovatech Solutions is a forward-thinking software development
            company dedicated to crafting innovative, robust, and scalable
            software solutions for businesses worldwide.
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-semibold">500+</p>
          <p className="text-sm text-gray-600">connections</p>
        </div>
      </div>
    </>
  );
};

export default CompanyHeader;
