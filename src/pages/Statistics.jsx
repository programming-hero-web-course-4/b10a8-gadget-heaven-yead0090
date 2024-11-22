import Chart from "../components/Chart";
import PageTitle from "../PageTitle";


const Statistics = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center ">
            <PageTitle title='Statistics'></PageTitle>
            {/* heading */}
            <div className="hero bg-violet-600 text-white mb-24 pb-36  ">
                <div className="hero-content text-center">
                    <div className=" ">
                        <h1 className="text-3xl font-bold"> Statistics</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

                    </div>
                </div>
            </div>
            <Chart></Chart>
        </div>
    );
};

export default Statistics;