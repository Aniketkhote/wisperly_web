import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

export function UserNav({ profileId }: { profileId: string }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="h-8 w-8 rounded-full">
          <img
            className="h-8 w-8"
            src="https://api.multiavatar.com/Skeleto81.png"
            alt={profileId}
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href={`/profile`}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={`/setting`}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Setting
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={`/login`}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Logout
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
