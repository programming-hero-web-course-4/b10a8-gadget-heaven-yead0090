import {  useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    
    const {product_title,price,product_image,product_id}=product|| {};
    
    const navigate =useNavigate();
   
    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{product_title}</h2>
                    <p>${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>navigate(`/productDetails/${product_id}`)} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;