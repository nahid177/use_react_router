import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="px-[220px] py-[20px] bg-slate-100">
            <div className="navbar bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                      
                    </div>
                    <a className="font-[700] btn btn-ghost text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         <li><Link to="/banar">Home</Link></li>
                        <li><a>Statistics</a></li>
                        <li><a>Applied Jobs</a></li>

                    </ul>
                </div>
                <div className="navbar-end bg-">
                    <a className="btn bg-[#7E90FE]  text-[#ffffff]" >Star Applying</a>
                </div>
            </div>        </div>
    );
};

export default Navbar;