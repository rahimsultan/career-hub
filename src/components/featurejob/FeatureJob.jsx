import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
const FeatureJob = () => {
    const [jobs, setJobs]= useState([])
    const [joblength, setJobLength] = useState(4)
    useEffect(()=>{
        fetch('./data/jobs.json')
        .then(res=>res.json())
        .then(data => setJobs(data))
    },[])
    // console.log(jobs);
  return (
    <div className="mb-32 max-w-7xl mx-auto lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {
            jobs.slice(0, joblength).map(job=>{
                return(
                    <div key={job.id} className="p-10 border rounded-md">
          <div className="mb-4 ">
            <img src={job.logo} alt="" />
          </div>
          <h4 className="text-xl font-bold mb-1">{job.job_title}</h4>
          <p>{job.company_name}</p>
          <div className="flex gap-6 my-2">
          <button
            type="button"
            className="rounded-md border border-[#7E90FE] px-3 py-2 text-sm font-semibold style-text shadow-sm"
          >
            {job.remote_or_onsite}
          </button>
          <button
            type="button"
            className="rounded-md border border-[#7E90FE] px-3 py-2 text-sm font-semibold style-text shadow-sm"
          >
            {job.job_type}
          </button>
          </div>
          <div className="flex gap-6 my-3">
            <h4 className="flex gap-2 items-center">
              <IoLocationOutline /> {job.location}
            </h4>
            <h4 className="flex gap-2 items-center">
              <LuCircleDollarSign /> Salary : {job.salary}
            </h4>
          </div>
          <Link to={`/job/${job.id}`}>
          <button
            type="button"
            className="rounded-md bg-grad px-3 py-3 text-sm font-semibold text-white shadow-sm"
          >
            View Details
          </button>
          </Link>
        </div>
                )
            })
        }
      </div>
      <div className={joblength ===jobs.length ? 'hidden' : 'text-center my-5'} >
            <button
                onClick={()=> setJobLength(jobs.length)}
                type="button"
                className="rounded-md  bg-grad px-3 py-3 text-sm font-semibold text-white shadow-sm">
              See All Jobs
            </button>
      </div>
    </div>
  );
};

export default FeatureJob;
