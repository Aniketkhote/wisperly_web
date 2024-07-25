import { pods } from "@/utils/data";
import { IPod } from "@/utils/types";
import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";

const PodSidebar = ({ pod }: { pod: IPod }) => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Other Pods You Might Like</h2>
      <div className="space-y-1">
        {pods
          .filter((p) => p.id !== pod.id)
          .slice(0, 5)
          .map((relatedPod) => (
            <Link
              key={relatedPod.id}
              href={`/pods/${relatedPod.name.replace(" ", "-").toLowerCase()}`}
              className="flex items-center p-2 hover:bg-gray-50 rounded-md transition duration-300"
            >
              {relatedPod.id % 2 == 0 ? (
                <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center bg-slate-200">
                  <FaUserAstronaut size={20} />
                </div>
              ) : (
                <img
                  src={`/${relatedPod.imageUrl}`}
                  alt={relatedPod.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-100"
                />
              )}

              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-700">
                  {relatedPod.name}
                </p>
                <p className="text-xs text-gray-500">
                  {relatedPod.members} members
                </p>
              </div>
            </Link>
          ))}
      </div>
      {/* <button className="w-full mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
          Create New Pod
        </button> */}
    </div>
  );
};

export default PodSidebar;
