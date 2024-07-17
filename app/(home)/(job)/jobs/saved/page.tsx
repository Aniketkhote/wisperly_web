import JobCard from "@/app/(home)/components/JobCard";
import { jobData } from "@/utils/data";
import { IJob } from "@/utils/types";

const SavedJobs = () => {
  return (
    <div className="space-y-4">
      {jobData.map((job: IJob) => (
        <JobCard key={job.id} job={job} bookmark={true} />
      ))}
    </div>
  );
};

export default SavedJobs;
