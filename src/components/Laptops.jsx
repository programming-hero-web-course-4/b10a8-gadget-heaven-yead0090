import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./productCard";


const Laptops = () => {
    const products=useLoaderData();
    const[laptops,setLaptops]=useState([]);
    useEffect( ()=>{
        const filteredByLaptops=[...products].filter((product)=>product.category==="Laptop");
        setLaptops(filteredByLaptops);
        
    }
    ,[products])
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center
              justify-center gap-5" >
                {
                    laptops.map((product) => <ProductCard product={product} key={product.product_id} ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Laptops;