import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { logout, user } = useAuth();

    const handleLogout = async () => {
        await logout()
    };


    return (
        <div className="navbar bg-[#07BEB8]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to={"/"} className="text-base font-semibold">Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"} className="text-base font-semibold">About Us</Link>
                        </li>
                        <li>
                            <Link to={"/shop"} className="text-base font-semibold">Shop</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} className="text-base font-semibold">Contact Us</Link>
                        </li>
                        {!user && (
                            <>
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </>
                        )}
                        {user && (
                            <li>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                        )}
                        {user && (
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="btn bg-red-500 text-white"
                                >
                                    Logout
                                </button>
                            </li>
                        )}


                    </ul>
                </div>
                <a className="cursor-pointer text-3xl font-bold pl-12"><Link to={"/"}>EduToys</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"} className="text-lg font-semibold hover:bg-[#EFD9CE]">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="text-lg font-semibold hover:bg-[#EFD9CE]">About Us</Link>
                    </li>
                    <li>
                        <Link to={"/shop"} className="text-lg font-semibold hover:bg-[#EFD9CE]">Shop</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="text-lg font-semibold hover:bg-[#EFD9CE]">Contact Us</Link>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <Link to={"/login"} className="text-lg font-semibold hover:bg-[#EFD9CE]">Login</Link>
                            </li>
                            <li>
                                <Link to={"/register"} className="text-lg font-semibold hover:bg-[#EFD9CE]">Register</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <li>
                            <Link to={"/dashboard"} className="text-lg font-semibold hover:bg-[#EFD9CE]">Dashboard</Link>
                        </li>
                    )}

                </ul>
            </div>

            <div>
                {user && (
                    <button
                        onClick={handleLogout}
                        className="btn border-white bg-[#8F3985] text-lg text-white hover:bg-[#25283D]"
                    >
                        Logout
                    </button>
                )}
                <div className="avatar pl-5">
                    <div className="w-12 rounded-full border-2 border-white">
                        <img src={user?.photoURL || "/public/profilepic.png"} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;