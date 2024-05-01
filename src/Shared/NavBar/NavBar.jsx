import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"

const NavBar = () => {

    const link = <>
                    <NavLink><li>Home</li></NavLink>
                    <NavLink><li>About</li></NavLink>
                    <NavLink><li>Services</li></NavLink>
                    <NavLink><li>Blog</li></NavLink>
                    <NavLink><li>Contact</li></NavLink>
                </>
    
    return (
        <div className="navbar bg-base-100 h-20 mb-10 flex items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-[#FF3811] outline-2  bg-transparent">Button</a>
            </div>
        </div>
    );
};

export default NavBar;