import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import ProductCard from "./productCard";



const Phones = () => {
    const products = useLoaderData();

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        const filteredByPhones = [...products].filter((product) => product.category === "Phone");
        setPhones(filteredByPhones);

    }
        , [products])



    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center
              justify-center gap-5  w-full" >
                {
                    phones.map((product) => <ProductCard product={product} key={product.product_id} ></ProductCard>)
                }
            </div>


        </div>
    );
};

export default Phones;