import PageTitle from "../PageTitle";

const News = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <PageTitle title='News'></PageTitle>
            {/* heading */}
            <div className="hero bg-violet-600 text-white mb-32 pb-36  ">
                <div className="hero-content text-center">
                    <div className=" ">
                        <h1 className="text-3xl font-bold"> News</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

                    </div>
                </div>
            </div>

            {/* cards */}
            <div className="flex flex-col gap-8 lg:gap-48">
                {/* hero section */}
                <div className="h-[1300px] w-full">
                    <div
                        className="hero min-h-screen h-full w-2/3 mx-auto "
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/Q8zCgT0/Apple-i-Phone-16-Pro-hero-240909-inline-jpg-large.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Apple debuts iPhone 16 Pro and iPhone 16 Pro Max</h1>
                                <p className="mb-5">
                                    Powered by the A18 Pro chip and built for Apple Intelligence, the Pro lineup introduces larger display sizes, Camera Control, innovative pro camera features, and a huge leap in battery life
                                </p>
                                <a href="https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/"><button className="btn btn-primary">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                {/* hero section */}
                <div className=" h-[1300px] w-full ">
                    <div
                        className="hero min-h-screen h-full w-2/3 mx-auto  "
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/vhS7jj7/Apple-Mac-Book-Pro-M2-Pro-and-M2-Max-lifestyle-230117-big-jpg-large.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center w-full ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Apple unveils MacBook Pro featuring M2 Pro and M2 Max</h1>
                                <p className="mb-5">
                                    New MacBook Pro features up to 6x faster performance than fastest Intel-based MacBook Pro and support for up to 96GB of unified memory for demanding pro workflows, with more game-changing performance and the longest battery life ever in a Mac.
                                </p>
                                <a href="https://www.apple.com/newsroom/2023/01/apple-unveils-macbook-pro-featuring-m2-pro-and-m2-max/"><button className="btn btn-primary">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                {/* hero section */}
                <div className=" h-[1300px] w-full">
                    <div
                        className="hero min-h-screen h-full w-2/3 mx-auto "
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/02TSF47/Apple-Watch-SE-8up-hero-220907-big-jpg-large.jpgg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Apple reveals Apple Watch Series 8 and the new Apple Watch SE</h1>
                                <p className="mb-5">
                                    Apple Watch Series 8 delivers best-in-class health features, including an innovative temperature sensor that enables advanced features for women’s health, and Crash Detection for severe car crashes

                                    The redesigned Apple Watch SE delivers the core Apple Watch experience at a new starting price
                                </p>
                                <a href="https://www.apple.com/newsroom/2022/09/apple-reveals-apple-watch-series-8-and-the-new-apple-watch-se/"><button className="btn btn-primary">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                {/* hero section */}
                <div className=" h-[1300px] w-full">
                    <div
                        className="hero min-h-screen  h-full w-2/3 mx-auto "
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/G5bTc3N/Samsung-S24-Ultra.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Galaxy S24 Ultra
                                </h1>
                                <p className="mb-5">
                                    Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility — starting with the most important device in your life. Your smartphone.
                                </p>
                                <a href="https://www.samsung.com/bd/smartphones/galaxy-s24-ultra/"><button className="btn btn-primary">View Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;