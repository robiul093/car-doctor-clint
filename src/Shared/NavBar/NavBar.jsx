import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const link = <>
        <NavLink><li>Home</li></NavLink>
        <NavLink><li>About</li></NavLink>
        <NavLink><li>Services</li></NavLink>
        <NavLink><li>Blog</li></NavLink>
        {
            user?.email && <NavLink to={'/bookings'}><li>My Bookings</li></NavLink>
        }
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
                <ul className="menu menu-horizontal px-1 text-lg font-semibold space-x-5">
                    {link}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {
                    user
                        ? <Link onClick={logOut} to={"/login"} className="btn text-[#FF3811]  border-[#FF3811]  bg-transparent">Log Out</Link>
                        : <>
                            <Link to={"/login"} className="btn text-[#FF3811] border-[#FF3811]  bg-transparent">Login</Link>
                            <Link to={"/registation"} className="btn text-[#FF3811] border-[#FF3811]  bg-transparent">Registation</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default NavBar;