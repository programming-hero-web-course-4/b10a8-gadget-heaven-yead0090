import { useEffect, useState } from "react";
import { getCartFromLocalStorage } from "../utils/utils";

import CardForDashboard from "./CardForDashboard";
import { useNavigate } from "react-router-dom";
import modalImg from '../../src/assets/Group.png'

const Cart = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);
    const handleSort = () => {
        const sorted = [...items].sort((a, b) => b.price - a.price);
        setItems(sorted);

    }


    useEffect(() => {
        const myItems = (getCartFromLocalStorage())
        setItems(myItems)

    }, [])


    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        const itemsCost = [];
        [...items].map((item) => { itemsCost.push(item.price) });
        let SumOfCost = 0;
        for (const itemCost of itemsCost) {
            SumOfCost += itemCost;
            setTotalCost(SumOfCost);


        }


    }, [totalCost, items])


    const handleCartPurchase = () => {
        document.getElementById('my_modal_5').showModal()
        localStorage.removeItem('cart')
        const myItems = (getCartFromLocalStorage())
        setItems(myItems)
        
        
        

    }
    const handleModalClose=(totalCost) => {
        setTotalCost(0)
        navigate('/');

    }

    return (
        <div>
            <div className="flex flex-col text-center    md:flex-row lg:flex-row justify-between max-w-7xl mx-auto text-2xl font-bold ">
                <p>Cart</p>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4">
                    <p>Total cost: ${totalCost}</p>
                    <button onClick={handleSort} className="btn rounded-full border border-violet-600 text-violet-600">Sort By Price</button>
                    <button disabled={totalCost == 0} onClick={handleCartPurchase} className="btn rounded-full text-white bg-violet-600">Purchase</button>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-4  w-full max-w-7xl mx-auto  " >
                {
                    items.map((product) => <CardForDashboard product={product} key={product.product_id} ></CardForDashboard>)
                }
            </div>

            {/* modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <img className="w-20" src={modalImg} alt="" />
                    <h3 className="font-bold text-3xl">payment Successful</h3>
                    <hr className="w-2/3 border border-t-base-200 my-4 " />
                    <p className="py-4">Thanks for purchasing</p>
                    <p>Total:${totalCost}</p>
                    <div className="modal-action flex items-center justify-center w-2/3">
                        <form className=" w-full" method="dialog">

                            <button onClick={handleModalClose} className="btn w-full rounded-3xl ">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;