"use client";

import { pods } from "@/utils/data";
import PodCard from "../components/PodCard";

const Pods = () => (
  <div className="flex ">
    <div className="bg-white rounded-lg p-5 mr-10 ml-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pods.map((pod) => (
          <PodCard key={pod.id} pod={pod} />
        ))}
      </div>
    </div>
  </div>
);

export default Pods;
