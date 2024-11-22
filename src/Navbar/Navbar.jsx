import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()

    return (

        <div>
            <div className={`navbar ${location.pathname == '/' ? ' bg-violet-600 , text-white' : 'bg-white, text-slate-800'}  font-bold max-w-7xl mx-auto `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-black shadow">
                            <li><NavLink style={({ isActive }) => ({
                                color: isActive ? 'white' : '',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })} to='/'>Home</NavLink ></li>
                            <li>
                                <NavLink style={({ isActive }) => ({
                                    color: isActive ? 'white' : '',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                })} to='/statistics'>Statistics</NavLink >

                            </li>
                            <li><NavLink style={({ isActive }) => ({
                                color: isActive ? 'white' : '',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })} to='/dashboard'>Dashboard</NavLink ></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })} to='/'>Home</NavLink ></li>
                        <li>

                            <NavLink style={({ isActive }) => ({
                                color: isActive ? 'white' : '',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })} to='/statistics'>Statistics</NavLink >


                        </li>
                        <li><NavLink style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })} to='/dashboard'>Dashboard</NavLink ></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <NavLink to='/dashboard' style={({ isActive }) => ({
                        color: isActive ? 'black' : '',
                        background:isActive ? '' : 'white',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })} className="btn rounded-full ">
                        <MdOutlineShoppingCart size={15}></MdOutlineShoppingCart></NavLink>
                    <NavLink to='/dashboard/wishlist' style={({ isActive }) => ({
                        color: isActive ? 'black' : '',
                        background:isActive ? '' : 'white',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })} className="btn rounded-full ml-4"><CiHeart size={15}></CiHeart></NavLink>


                </div>
            </div>
        </div>
    );
};

export default Navbar;