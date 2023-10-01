import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobItem from "../../components/jobItem/JobItem";
import { getItem } from "../../utility/localStore";



const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [applied, setApplied] = useState([])
  const [filter, setFilter] = useState([])
  useEffect(()=>{
    const storedID = getItem()
    if(jobs.length >0 ){
      const appliedJob = jobs.filter(job=> storedID.includes(job.id))
      setApplied(appliedJob);
      setFilter(appliedJob)
    }
  },[])

  const handleJobFilter= text =>{
    if(text === 'all'){
      setFilter(applied)
    }else if(text === 'remote'){
      const fn = applied.filter(ap=> ap.remote_or_onsite === 'Remote')
      setFilter(fn)
    }else if(text === 'onsite'){
      const fjob = applied.filter(app=> app.remote_or_onsite === 'Onsite')
      setFilter(fjob)
    }
  }
  return (
    <div className="mb-20 mt-10 max-w-7xl mx-auto lg:px-8">
      <div className="text-right my-2">
        <select onChange={(e)=> handleJobFilter(e.target.value)} name="filter" id="filter" className="border-2 outline-none px-2">
          <option value="all">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">On site</option>
        </select>
      </div>
      <div className=" flex flex-col gap-10">
      {
        filter.map(app=> <JobItem key={app.id} app={app}/>)
      }
    
    </div>
    </div>
  )
}

export default AppliedJobs