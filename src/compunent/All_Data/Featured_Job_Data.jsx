import { useEffect, useState } from "react";
import Featured_Job_Card from "../All_Card_Banar/Featured_Job_Card";

const Featured_Job_Data = () => {
    const[job_List, setJob_List] = useState([])
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>setJob_List(data))
    },[])
    return (
        <div className="mt-[40px]">
            <h2 className="text-2xl text-center  font-[700]" >Featured Jobs</h2>
            <p className="p-[17px] text-center text-[9px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="px-[190px] py-[40px] grid grid-cols-2 gap-6">
                {
                    job_List.map(featured_Job_Data =><Featured_Job_Card
                        featured_Job_Data={featured_Job_Data}
                        key={job_List.id}
                    ></Featured_Job_Card>)
                }
            </div>
        </div>
    );
};

export default Featured_Job_Data;