import { BsTelephoneForward } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setItem } from "../../utility/localStore";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(jb => jb.id === idInt)
    // console.log(job);

    const handleApplyJob =()=>{
        setItem(idInt)
        toast.success('Apply Done', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

  return (
    <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto lg:px-8 my-32">
        <div className="col-span-3">
            <p><span className="font-bold">Job Description:</span> {job.job_description}</p>
            <p className="my-6"><span className="font-bold ">Job Responsibility:</span> {job.job_responsibility}</p>
            <div>
                <p className="font-bold">Educational Requirements:</p>
                <p>{job.educational_requirements}</p>
            </div>
            <div className="my-6">
                <p className="font-bold">Experiences:</p>
                <p>{job.experiences}</p>
            </div>
        </div>
        <div>
        <div className="icon-bg p-5 rounded-md h-fit">
            <h3 className="font-bold text-xl border-b pb-2">Job Details</h3>
            <h4 className="flex gap-2 items-center my-2">
              <LuCircleDollarSign /> <span className="font-bold">Salary:</span> {job.salary}
            </h4>
            <h4 className="flex gap-2 items-center my-2">
              
            </h4>
            <div className="my-2">
            <PiSuitcaseSimple className="inline-block mr-1"/> <span className="font-bold">Job Title:</span> {job.job_title}
            </div>
            <h3 className="font-bold text-xl border-b pb-2">Contact Information</h3>
            <h4 className="flex gap-2 items-center my-2">
              <BsTelephoneForward /> <span className="font-bold">Phone:</span> {job.contact_information.phone}
            </h4>
            <h4 className="flex gap-2 items-center my-2">
              <MdOutlineMarkEmailUnread/> <span className="font-bold">Email:</span> {job.contact_information.email}
            </h4>
            <div className="my-2">
            <IoLocationOutline className=" inline-block"/> <span className="font-bold">Address:</span> {job.contact_information.address}
            </div>
        </div>
        <div>
        <button
        onClick={handleApplyJob}
              type="button"
              className="rounded-md bg-grad px-3 py-3 w-full my-5 text-sm font-semibold text-white shadow-sm"
            >
              Apply Now
            </button>
        </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default JobDetails