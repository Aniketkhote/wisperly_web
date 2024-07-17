import Link from "next/link";
import { UserNav } from "./UserNav";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-10 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-lg font-semibold">
            Wisperly
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 border border-gray-300 rounded-full w-[300px]"
        />
        <UserNav profileId="Admin" />
      </div>
    </nav>
  );
};

export default Navbar;
