import { ImCancelCircle } from "react-icons/im";



const CardForDashboard = ({ product }) => {
    const { product_title, price, product_image,  description } = product || {};



    return (
        <div>
            <div className="card bg-base-100  flex flex-col md:flex-row lg:flex-row justify-center  items-center ">
                <div>
                    <figure>
                        <img
                            src={product_image}
                            alt="Shoes" />
                    </figure>
                </div>
                <div className="card-body flex flex-col font-bold">
                    <h2 className="card-title text-2xl font-bold">{product_title}</h2>
                    <p className="font-normal">{description}</p>
                    <p>Price:${price}</p>

                </div >
                <div className="">
                <button className=" pr-20  bg-white"> <ImCancelCircle color="red" size={25}></ImCancelCircle> </button>
                </div>
            </div>
        </div>
    );
};

export default CardForDashboard;