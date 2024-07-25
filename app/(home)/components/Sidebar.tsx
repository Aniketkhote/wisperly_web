"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import {
  FaBookmark,
  FaBriefcase,
  FaHome,
  FaSuitcase,
  FaUserAstronaut,
  FaUsers,
} from "react-icons/fa";
import Footer from "./Footer";
import SidebarProfileCard from "./SidebarProfileCard";

interface NavItem {
  href: string;
  icon: IconType;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", icon: FaHome, label: "Feed" },
  { href: "/mynetwork", icon: FaUsers, label: "Network" },
  // { href: "/communities", icon: FaLayerGroup, label: "Communities" },
  { href: "/pods", icon: FaUserAstronaut, label: "Pods" },
  // { href: "/podcasts", icon: FaPodcast, label: "Podcasts" },
  { href: "/companies", icon: FaBriefcase, label: "Companies" },
  { href: "/jobs", icon: FaSuitcase, label: "Job" },
  { href: "/bookmark", icon: FaBookmark, label: "Bookmark" },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="ml-5 mt-5 space-y-5">
      <SidebarProfileCard
        name="Alexis Wells"
        username="wellsalex"
        avatarUrl="https://api.multiavatar.com/Skeleto81.png"
        isVerified={true}
        followers={4600}
        following={4600}
        posts={460}
      />
      <nav className="bg-white p-4 rounded-lg text-sm space-y-2">
        {navItems.map(({ href, icon: Icon, label }) => (
          <NavItem
            key={href}
            href={href}
            icon={<Icon className="size-4" />}
            label={label}
            isActive={
              pathname === href ||
              (href === "/jobs" && pathname.startsWith("/jobs")) ||
              (href === "/pods" && pathname.startsWith("/pods"))
            }
          />
        ))}
      </nav>
      <Footer />
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, isActive }) => (
  <Link
    className={`flex items-center gap-3 p-3 text-gray-800 hover:text-white hover:bg-indigo-600 hover:rounded-lg ${
      isActive ? "bg-indigo-600 rounded-lg text-white" : ""
    }`}
    href={href}
  >
    {icon}
    <p>{label}</p>
  </Link>
);

export default Sidebar;
