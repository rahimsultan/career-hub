import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const JobItem = ({app}) => {
    // console.log(app);
    const {id, company_name,job_title, job_type, location, salary, remote_or_onsite, logo} = app
  return (

        <div className="flex items-center justify-between border rounded-md pr-10 pl-4 py-4">
      <div className="flex gap-5 items-center">
        <div className="w-32 h-[150px] flex justify-center items-center bg-slate-100 rounded-md p-2">
          <img src={logo} alt="" />
        </div>
        <div className="my-class">
        <h4 className="text-xl font-bold mb-1">{job_title}</h4>
          <p>{company_name}</p>
          <div className="flex gap-6 my-2">
          <button
            type="button"
            className="rounded-md border border-[#7E90FE] px-3 py-2 text-sm font-semibold style-text shadow-sm"
          >
            {job_type}
          </button>
          <button
            type="button"
            className="rounded-md border border-[#7E90FE] px-3 py-2 text-sm font-semibold style-text shadow-sm"
          >
            {remote_or_onsite}
          </button>
          </div>
          <div className="flex gap-6 my-3">
            <h4 className="flex gap-2 items-center">
              <IoLocationOutline /> {location}
            </h4>
            <h4 className="flex gap-2 items-center">
              <LuCircleDollarSign /> Salary : {salary}
            </h4>
          </div>
        </div>
      </div>
      <Link to={`/job/${id}`}>
          <button
            type="button"
            className="rounded-md bg-grad px-3 py-3 text-sm font-semibold text-white shadow-sm"
          >
            View Details
          </button>
          </Link>
    </div>
  )
}

export default JobItem