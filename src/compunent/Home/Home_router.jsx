import Banar from "../All_Card_Banar/Banar";
import Featured_Job_Data from "../All_Data/Featured_Job_Data";
import Job_Catagory from "../All_Data/Job_Catagory";

const Home_router = () => {
    return (
        <div>
            <Banar></Banar>
            <Job_Catagory></Job_Catagory>
            <Featured_Job_Data></Featured_Job_Data>
        </div>
    );
};

export default Home_router;