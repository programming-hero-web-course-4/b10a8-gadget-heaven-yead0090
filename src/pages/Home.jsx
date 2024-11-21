import { NavLink, Outlet, } from "react-router-dom";
import bannerImg from '../assets/banner.jpg';
import PageTitle from "../PageTitle";



const Home = () => {




    return (
        <div className="max-w-7xl mx-auto ">
            <PageTitle title='Home'></PageTitle>
            {/* banner */}
            <div className="relative">
                <div className="hero bg-violet-600  text-white mb-[500px] pb-32 lg:pb-72  ">
                    <div className="hero-content text-center">
                        <div className=" ">
                            <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the <br /> next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button className="btn  rounded-full px-8">shop Now</button>
                        </div>
                    </div>
                </div>

                 {/* vr photo */}
                <div >
                    <img className="w-3/4 absolute z-50 top-3/4 md:top-1/2 lg:top-1/2 left-1/2 -translate-x-1/2   border rounded-3xl border-white p-4 mb-14 " src={bannerImg} alt="" />
                </div>



            </div>
           



            <div className="flex">



                <div className="flex flex-row contain justify-center">
                    {/* drawer */}
                    <div className="drawer lg:drawer-open z-50">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                                Open drawer
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-white shadow-lg mr-11 mt-24 text-base-content  w-64 p-8 ">
                                {/* Sidebar content here */}
                                <li><NavLink to='/' className=" bg-base-200 my-2 rounded-full">All Products</NavLink></li>
                                <li><NavLink to='/phones' className=" bg-base-200 my-2 rounded-full">Phone</NavLink></li>
                                <li><NavLink to='/laptop' className=" bg-base-200 my-2 rounded-full">Laptop</NavLink></li>
                                <li><NavLink to='/smartwatch' className=" bg-base-200 my-2 rounded-full">Smartwatch</NavLink></li>
                                <li><NavLink to='/accessories' className=" bg-base-200 my-2 rounded-full">Accessories</NavLink></li>

                            </ul>
                        </div>
                    </div>




                </div>

                <div className="flex flex-col  gap-14 ">
                    {/* heading */}
                    <div className="text-start ">
                        <p className="text-4xl font-bold">Explore Cutting-Edge Gadgets</p>
                    </div>
                    {/* cards */}
                    <div className="gap-7 ">



                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;