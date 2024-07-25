"use client";

import Image from "next/image";
import Link from "next/link";

interface ICompany {
  id: number;
  name: string;
  type: string;
  headerImage: string;
  logo: string;
  description: string;
  employeeCount: number;
  founded: number;
}

const CompanyCard = ({ company }: { company: ICompany }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-36">
        <Image
          src={`${
            company.headerImage != ""
              ? company.headerImage
              : "/images/banner.png"
          }`}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-1 rounded-full transition-all duration-300 transform hover:scale-110">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={80}
              height={80}
              className="rounded-full w-20 h-20"
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800">{company.name}</h3>
        <p className="text-gray-700 text-sm mb-2">{company.type}</p>
        <p className="text-sm text-gray-500 mb-4">{company.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>Founded: {company.founded}</span>
          <span>{company.employeeCount} employees</span>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/companies/${company.id}`}>
            <span className="text-indigo-600 hover:text-indigo-800 transition duration-300">
              Learn More →
            </span>
          </Link>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded transition duration-300"
            onClick={() => alert(`Connecting to ${company.name}`)}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

const Companies = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 mr-10">
    {companies.map((company) => (
      <CompanyCard key={company.id} company={company} />
    ))}
  </div>
);

export default Companies;

const companies: ICompany[] = [
  {
    id: 1,
    name: "TechCorp",
    type: "Technology",
    headerImage: "",
    logo: "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg",
    description: "Leading innovation in software and hardware solutions.",
    employeeCount: 5000,
    founded: 1995,
  },
  {
    id: 2,
    name: "GreenEnergy",
    type: "Renewable Energy",
    headerImage:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
    logo: "https://images.pexels.com/photos/5852135/pexels-photo-5852135.jpeg",
    description:
      "Pioneering sustainable energy solutions for a greener future.",
    employeeCount: 2000,
    founded: 2005,
  },
  {
    id: 3,
    name: "HealthPlus",
    type: "Healthcare",
    headerImage: "",
    logo: "https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg",
    description:
      "Revolutionizing healthcare with cutting-edge medical technologies.",
    employeeCount: 3500,
    founded: 1980,
  },
  {
    id: 4,
    name: "TechCorp",
    type: "Technology",
    headerImage: "",
    logo: "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg",
    description: "Leading innovation in software and hardware solutions.",
    employeeCount: 5000,
    founded: 1995,
  },
  {
    id: 5,
    name: "GreenEnergy",
    type: "Renewable Energy",
    headerImage:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
    logo: "https://images.pexels.com/photos/5852135/pexels-photo-5852135.jpeg",
    description:
      "Pioneering sustainable energy solutions for a greener future.",
    employeeCount: 2000,
    founded: 2005,
  },
  {
    id: 6,
    name: "HealthPlus",
    type: "Healthcare",
    headerImage: "",
    logo: "https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg",
    description:
      "Revolutionizing healthcare with cutting-edge medical technologies.",
    employeeCount: 3500,
    founded: 1980,
  },
  // Add more companies as needed
];
