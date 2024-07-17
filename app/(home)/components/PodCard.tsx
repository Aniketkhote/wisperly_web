import { IPod } from "@/utils/types";
import Link from "next/link";

const PodCard = ({ pod }: { pod: IPod }) => {
  return (
    <div
      key={pod.id}
      className="bg-white border rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
    >
      <img
        src={pod.imageUrl}
        alt={pod.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-indigo-600">
          {pod.name}
        </h2>
        <p className="text-gray-600 mb-4">{pod.description}</p>
        <p className="text-sm text-gray-500 mb-4">{pod.members} members</p>
        <Link href={`pods/${pod.id}`}>
          <button className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
            Join Pod
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PodCard;