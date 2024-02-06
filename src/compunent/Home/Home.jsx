import { Outlet } from "react-router-dom";
import Navbar from "../Html_Layout/Navbar";
import Footer from "../Html_Layout/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;