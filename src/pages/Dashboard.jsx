import { NavLink, Outlet, } from "react-router-dom";
import PageTitle from "../PageTitle";




const Dashboard = () => {

    return (
        <div className=" max-w-7xl mx-auto  ">
            <PageTitle title='Dashboard'></PageTitle>
            <div className="max-w-7xl mx-auto ">


                <div className="hero bg-violet-600 text-white mb-24 pb-36  ">
                    <div className="hero-content text-center">
                        <div className=" ">
                            <h1 className="text-3xl font-bold"> Dashboard</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <div className="mt-6 flex gap-4   items-center justify-center">
                                <NavLink to='/dashboard'><button className="btn rounded-3xl px-14">Cart</button></NavLink>
                                <NavLink to='/dashboard/wishlist'><button className="btn rounded-3xl px-14">Wishlist</button></NavLink>

                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;