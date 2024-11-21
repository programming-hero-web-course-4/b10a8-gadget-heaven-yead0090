
// import Footer from '../Footer/Footer';
// import Navbar from './Navbar/Navbar'

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="bg-base-200">
            <Toaster></Toaster>
            <Navbar></Navbar>
            <div className="">
                {/* dynamic */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;