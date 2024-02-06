import { Link, useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiSubtitlesThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banar_job from "../Apply/Banar_job";

const Job_Main = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id, 10); // Convert id to integer
    const job = jobs.find(job => job.id === idInt);
    const notify = () =>{
         toast('Wow so easy!');
    }
    return (
        <div>
            <Banar_job></Banar_job>
            <div className="flex gap-10 py-[90px]">



            <div className="space-y-10 px-[190px]  w-[1000px] ">
                <h2><span className="font-[700]">Job Description:</span>{job.job_description}</h2>
                <h2><span className="font-[700]">Job Description:</span>{job.job_responsibility}</h2>
                <h2 className="font-[700]">Educational Requirements:</h2>
                <h2>{job.educational_requirements}</h2>
                <h2 className="font-[700]">Experiences:</h2>
                <h2>{job.experiences}</h2>


            </div >


            <div className="gap-5">
            <div className="p-[40px] w-[400px] h-[350px] bg-slate-200  rounded-lg">
                <h2 className="font-[700]">Job Details</h2>
                <h2 className="w-[330px] mt-[10px] bg-slate-300 h-[1px]"></h2>
                <h2 className="mt-[10px] flex gap-[5px]"> <RiMoneyDollarCircleLine className="text-[20px]"></RiMoneyDollarCircleLine><span className="font-[600]">Salary:</span>{job.salary}</h2>
                <h2 className="mt-[5px] flex gap-[5px]"> <PiSubtitlesThin className="text-[20px]"></PiSubtitlesThin><span className="font-[600]">Job Title:</span>{job.job_title}</h2>
                <h2 className="font-[700] mt-[14px]">Contact Information</h2>
                <h2 className="w-[330px] mt-[15px] bg-slate-300 h-[1px]"></h2>
                <h2 className="mt-[5px] flex gap-[5px]"> <IoCallOutline  className="text-[20px]"></IoCallOutline ><span className="font-[600]">Phone:</span>{job.contact_information.phone}</h2>
                <h2 className="mt-[5px] flex gap-[5px]"> <AiOutlineMail   className="text-[20px]"></AiOutlineMail  ><span className="font-[600]">Email:</span>{job.contact_information.email}</h2>
                <h2 className="mt-[5px] flex gap-[5px] "> <CiLocationOn   className="text-[20px]"></CiLocationOn  ><span className="font-[600]">Address:</span>{job.contact_information.address}</h2>


            </div >
            <Link to="/apply"><button onClick={notify}  className="mt-[20px] w-[400px] h-[40px] bg-[#7E90FE] rounded-lg text-gray-50 font-[600]">Apply Now</button></Link>
            <ToastContainer />

            </div>




            </div>

        </div>
    );
};

export default Job_Main;
