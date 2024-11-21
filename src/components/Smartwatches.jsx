import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./productCard";

const Smartwatches = () => {
    const products=useLoaderData();
    const[smartwatches,setSmartwatches]=useState([]);
    useEffect( ()=>{
        const filteredBySmartwatches=[...products].filter((product)=>product.category==="Smartwatch");
        setSmartwatches(filteredBySmartwatches);
        
    }
    ,[products])
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center
              justify-center gap-5 " >
                {
                    smartwatches.map((product) => <ProductCard product={product} key={product.product_id} ></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default Smartwatches;