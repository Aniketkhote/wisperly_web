"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const NetworkList = ({
  followers,
  following,
  connections,
}: {
  followers: any[];
  following: any[];
  connections: any[];
}) => {
  const [activeTab, setActiveTab] = useState("Following");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<any[]>([]);

  useEffect(() => {
    const currentList =
      activeTab === "Followers"
        ? followers
        : activeTab === "Connections"
        ? connections
        : following;

    setFilteredPeople(
      currentList.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [activeTab, searchTerm, followers, following, connections]);

  const handleAction = (person: any) => {
    // Implement the logic for follow/unfollow/remove connection
    console.log(`Action for ${person.name} in ${activeTab} tab`);
  };

  const renderList = () => (
    <AnimatePresence>
      {filteredPeople.map((person: any) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-4 mb-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150 ease-in-out"
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {person.name}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {person.description}
            </p>
          </div>
          <button
            onClick={() => handleAction(person)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out
              ${
                person.isFollowing
                  ? "border border-indigo-500 text-indigo-500 hover:bg-indigo-600 hover:text-white"
                  : person.isFollowing == false
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
          >
            {person.isFollowing
              ? "Following"
              : person.isFollowing == false
              ? "Follow"
              : "Remove"}
          </button>
        </motion.div>
      ))}
    </AnimatePresence>
  );

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-200">
        {["Following", "Followers", "Connections"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-4 transition duration-150 ease-in-out
              ${
                activeTab === tab
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }
              focus:outline-none`}
          >
            {tab}
            <span className="ml-2 text-sm text-gray-600">
              (
              {tab === "Following"
                ? following.length
                : tab === "Followers"
                ? followers.length
                : connections.length}
              )
            </span>
          </button>
        ))}
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {renderList()}
      </div>
    </div>
  );
};

const followers = [
  {
    id: 1,
    name: "Emma Thompson",
    description: "UX Designer | Creative Thinker",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    isFollowing: false,
  },
  {
    id: 2,
    name: "Michael Chen",
    description: "Software Engineer at Tech Innovators",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isFollowing: true,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    description: "Marketing Specialist | Content Creator",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    isFollowing: true,
  },
  {
    id: 4,
    name: "Alexander Novak",
    description: "Data Scientist | AI Enthusiast",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    isFollowing: false,
  },
  {
    id: 5,
    name: "Olivia Parker",
    description: "Graphic Designer | Illustrator",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    isFollowing: false,
  },
  {
    id: 6,
    name: "Daniel Kim",
    description: "Product Manager at StartUp Co.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    isFollowing: true,
  },
  {
    id: 7,
    name: "Isabella Martínez",
    description: "Front-end Developer | UI Specialist",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    isFollowing: false,
  },
  {
    id: 8,
    name: "Lucas Andersson",
    description: "Blockchain Developer | Crypto Enthusiast",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    isFollowing: true,
  },
  {
    id: 9,
    name: "Ava Williams",
    description: "Digital Marketing Manager | SEO Expert",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    isFollowing: false,
  },
  {
    id: 10,
    name: "Ethan Nakamura",
    description: "Full Stack Developer | Open Source Contributor",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    isFollowing: true,
  },
];

const following = [
  {
    id: 1,
    name: "Raj Shamani",
    description: "Founder: House of X | Content creator",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    isFollowing: true,
  },
  {
    id: 2,
    name: "Rasul Ramixanov",
    description: "Flutter PRO MAX, (Rust mini)",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    isFollowing: true,
  },
  {
    id: 3,
    name: "Amelia Clarke",
    description: "Tech Journalist | Podcast Host",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    isFollowing: true,
  },
  {
    id: 4,
    name: "Noah Patel",
    description: "AI Researcher | Machine Learning Expert",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    isFollowing: true,
  },
  {
    id: 5,
    name: "Zoe Adams",
    description: "Cybersecurity Analyst | Ethical Hacker",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    isFollowing: true,
  },
  {
    id: 6,
    name: "Liam O'Connor",
    description: "IoT Specialist | Smart Home Enthusiast",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    isFollowing: true,
  },
  {
    id: 7,
    name: "Mia Tanaka",
    description: "UX Researcher | Cognitive Psychology PhD",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    isFollowing: true,
  },
  {
    id: 8,
    name: "Oscar Fernández",
    description: "DevOps Engineer | Cloud Architecture Expert",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    isFollowing: true,
  },
  {
    id: 9,
    name: "Charlotte Dubois",
    description: "VR/AR Developer | 3D Modeling Enthusiast",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    isFollowing: true,
  },
  {
    id: 10,
    name: "Elijah Nkosi",
    description: "Quantum Computing Researcher | Physics PhD",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    isFollowing: true,
  },
];

const connections = [
  {
    id: 1,
    name: "Sophia Lee",
    description: "Product Designer at TechGiant Inc.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 2,
    name: "Benjamin Wong",
    description: "Senior Software Architect | Cloud Expert",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Aria Johnson",
    description: "Data Analyst | Business Intelligence Specialist",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 4,
    name: "Leo Müller",
    description: "Robotics Engineer | Automation Expert",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 5,
    name: "Chloe Lefèvre",
    description: "UI/UX Designer | Design Systems Specialist",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 6,
    name: "Matteo Rossi",
    description: "Blockchain Solutions Architect | Crypto Consultant",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 7,
    name: "Sophie Taylor",
    description: "Growth Hacker | Digital Marketing Strategist",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: 8,
    name: "Aiden O'Brien",
    description: "Network Security Specialist | CISSP",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 9,
    name: "Elena Petrova",
    description: "Machine Learning Engineer | NLP Expert",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 10,
    name: "Jamal Ahmed",
    description: "Full Stack Developer | Open Source Contributor",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    id: 11,
    name: "Yuki Tanaka",
    description: "Game Developer | Unity 3D Specialist",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 12,
    name: "Gabriel Silva",
    description: "DevOps Engineer | Kubernetes Expert",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
];

const MyNetwork = () => (
  <div className="flex">
    <div className="w-[2vw]"></div>
    <div className="w-[65vw]">
      <NetworkList
        followers={followers}
        following={following}
        connections={connections}
      />
    </div>
  </div>
);

export default MyNetwork;
