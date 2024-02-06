import { useEffect, useState } from "react";
import List from "../All_Card_Banar/List";


const Job_Catagory = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div className="p-[20px] mt-[40px]">
            <h2 className="text-2xl text-center  font-[700]" >Job Category List</h2>
            <p className="p-[17px] text-center text-[9px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" flex space-x-36 px-[180px] py-[20px]">
                {
                    list.map(job_Catagory => <List
                        job_Catagory={job_Catagory}
                        key={list.id}>
                    </List>)
                }
            </div>


        </div>
    );
};

export default Job_Catagory;