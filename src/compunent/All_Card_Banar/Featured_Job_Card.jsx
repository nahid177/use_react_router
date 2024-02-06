import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Featured_Job_Card = ({ featured_Job_Data }) => {
    // eslint-disable-next-line react/prop-types
    const { id,logo,job_title,company_name,remote_or_onsite,location,salary } = featured_Job_Data;
    return (
        <div>
            <div className="card  w-[550px] bg-base-100 shadow-xl">
                <div className=" p-[20px] space-y-1">
                    <img className="w-[60px] mb-[10px]" src={logo} alt="" />
                    <h2 className="font-[600] text-[20px]">{job_title}</h2>
                    <p className="text-[12px] text-[#757575]">{company_name}</p>
                    <div className="flex">
                         <h2 className="border-2 w-[70px]  p-[8px] text-[14px] mr-[20px]  border-sky-200">{remote_or_onsite}</h2>
                         <h2 className="border-2 w-[70px] p-[8px] text-[14px]  border-sky-200">{remote_or_onsite}</h2>
                 </div>
                    <div className="flex">
                    <img className="w-[12px] h-[16px] mr-[5px]" src="public\Frame.png" alt="" />
                    <p className="text-[13px] text-[#757575] mr-[15px]">{location}</p>
                    <img className="w-[17px] h-[17px] mr-[5px]" src="public\Frame (1).png" alt="" />
                    <p className="text-[#757575] text-[13px]">{salary}</p>
                    </div>
                    <div className="card-actions">
                      <Link to={`/details/${id}`}>
                      <button className="btn text-[#fff] w-[100px] text-[9px] h-[10px] bg-[#7E90FE]">  View Details</button></Link>
                    </div>
                </div>
            </div>    
          </div>
    );
};

export default Featured_Job_Card;