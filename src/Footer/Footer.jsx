

const Footer = () => {
    return (
        <div className="flex flex-col items-center max-w-[1400px] mx-auto mt-56 bg-white">
            <div className="text-center font-semibold mb-8 ">
                <p className="text-3xl mb-3">Gadget Heaven</p>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            {/* <div ></div> */}
            <hr className="w-2/3 border border-t-base-200 "/>
            <footer className="footer flex justify-around  text-black mx-auto p-10">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;