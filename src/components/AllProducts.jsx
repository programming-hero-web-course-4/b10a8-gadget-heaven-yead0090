import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ProductCard from "./productCard";


const AllProducts = () => {
    const products = useLoaderData();
    const navigate =useNavigate()
    
   
    
    
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 w-full" >
           
            {
                products.map((product)=><ProductCard product={product} key={product.product_id} ></ProductCard>)
            }
            
        </div>
    );
};

export default AllProducts;