import { useEffect, useState } from "react";
import { getWishlistFromLocalStorage, } from "../utils/utils";

import CardForDashboard from "./CardForDashboard";

const Wishlist = () => {
    const[items,setItems]=useState([]);
    const handleSort=()=>{
        const sorted = [...items].sort((a,b)=>b.price - a.price);
        setItems(sorted);
        
    }
    

    useEffect(()=>{
        const myItems=(getWishlistFromLocalStorage())
        setItems(myItems)
        
    },[])

   

    const [totalCost,setTotalCost]= useState([]);

    useEffect(()=>{
        const itemsCost=[];
    [...items].map((item)=>{itemsCost.push(item.price)});
       let SumOfCost=0;
       for (const itemCost of itemsCost) {
        SumOfCost += itemCost;
        setTotalCost(SumOfCost);
        
    
      }
    

    },[totalCost,items])
    return (
        <div>
            <div className="flex flex-col md:flex-row lg:flex-row  justify-between max-w-7xl mx-auto text-2xl text-center font-bold ">
                <p>Wishlist</p>
                <div className="flex flex-col md:flex-row lg:flex-row  items-center gap-4">
                    <p>Total cost: ${totalCost}</p>
                    <button onClick={handleSort} className="btn rounded-full border border-violet-600 text-violet-600">Sort By Price</button>
                    <button className="btn rounded-full text-white bg-violet-600">Purchase</button>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-4  w-full max-w-7xl mx-auto  " >
                {
                    items.map((product) => <CardForDashboard product={product} key={product.product_id} ></CardForDashboard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;