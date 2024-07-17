"use client";

import { jobData } from "@/utils/data";
import { IJob } from "@/utils/types";
import Link from "next/link";
import { useParams } from "next/navigation";

const JobDetail = () => {
  const params = useParams<{ id: string }>();

  const job: IJob = jobData.filter(
    (jp: { id: number }) => jp.id == Number(params.id)
  )[0];

  console.log("id is : ", params.id);
  console.log("job is : ", job);

  return (
    <div className="p-4 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div className="flex">
          <div className="h-12 w-12 p-1 rounded-md bg-gray-100">
            <img src={job.logo} alt={job.company} />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold">{job.title}</h2>
            <h4 className="text-sm">{job.location}</h4>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-4">
        We are seeking a highly skilled Senior Software Engineer to join our
        dynamic team. The ideal candidate will have extensive experience in
        software development, a deep understanding of programming languages, and
        a passion for innovation. You will be responsible for designing,
        developing, and maintaining software applications, as well as
        collaborating with cross-functional teams to deliver high-quality
        products.
      </p>
      <div className="flex flex-wrap mb-2">
        {job.tags.map((tag: string, index: any) => (
          <span
            key={index}
            className="px-2 py-1 bg-indigo-50 font-medium text-gray-500 text-xs rounded mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 pt-5 border-t">
        <div className="flex justify-between items-center">
          <h5>
            About
            <Link
              href={`/companies/${job.id}`}
              className="hover:text-indigo-500 hover:underline"
            >
              {" "}
              {job.company}
            </Link>
          </h5>
          <button className="border hover:bg-indigo-500 text-indigo-500 hover:text-white rounded-md font-semibold text-sm px-2 py-1">
            Connect
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Innovatech Solutions is a forward-thinking software development
          company dedicated to crafting innovative, robust, and scalable
          software solutions for businesses worldwide. Founded in 2015, we have
          quickly established ourselves as leaders in the tech industry by
          combining cutting-edge technology with strategic insights to deliver
          unparalleled value to our clients.
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
