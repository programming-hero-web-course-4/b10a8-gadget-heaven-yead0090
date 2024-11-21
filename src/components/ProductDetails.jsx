import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import ReactStars from 'react-rating-stars-component';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import {  getWishlistFromLocalStorage, handleAddToCartToLocalStorage, handleAddToWishlistToLocalStorage } from "../utils/utils";
import PageTitle from "../PageTitle";


const ProductDetails = () => {

    const { id } = useParams();
    const products = useLoaderData();
    const [product, setProduct] = useState();
    useEffect(() => {
        const filteredP = [...products].find((p) => p.product_id == id);
        setProduct(filteredP);
    }, [products, id])
    const { product_title, price, product_image, product_id, description, specification, rating } = product || {};


    const [isAdded, setIsAdded] = useState()

    useEffect(() => {
        const wishlist = getWishlistFromLocalStorage();
        const isExist = [...wishlist].find((item) => item.product_id == product_id);
        if (isExist) {
            return setIsAdded(true);
        }

    }, [product_id])
    const handleAddToCart = (product) => {

        handleAddToCartToLocalStorage(product);
        
    }
    const handleAddToWishlist = (product) => {
        handleAddToWishlistToLocalStorage(product)
        setIsAdded(true)
    }
    return (
        <div className="max-w-7xl mx-auto relative mb-[700px]">
            <PageTitle title='Product-Details'></PageTitle>
            {/* heading */}
            <div className="hero bg-violet-600 text-white mb-24 pb-36  ">
            <div className="hero-content text-center">
                <div className=" ">
                    <h1 className="text-3xl font-bold"> Product Details</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    
                </div>
            </div>
        </div>


            {/* hero section */ }
    <div className="hero bg-white w-2/3 mx-auto absolute z-50 top-3/4 md:top-2/3 lg:top-2/3 left-1/2 -translate-x-1/2">
        <div className="hero-content flex-col lg:flex-row">
            <img
                src={product_image}
                className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-4xl font-bold">{product_title}</h1>
                <p className="font-bold text-lg">Price:${price}</p>
                <button className="btn rounded-full border border-red-400 my-3">in stock</button>
                <p className="py-6">
                    {description}
                </p>
                <p>Specification:</p>

                <p>{specification}</p>
                <p>Rating:</p>
                <div className="flex  items-center">
                    <ReactStars
                        count={rating}
                        isHalf={true}
                        color='#ffd700'
                        size={24}

                    ></ReactStars>
                    <p className="ml-4 px-1 bg-white rounded-md">{rating}</p>
                </div>


                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add to cart <MdOutlineShoppingCart></MdOutlineShoppingCart></button>

                <button  disabled={isAdded} onClick={() => handleAddToWishlist(product)} className="btn rounded-full ml-4"><CiHeart size={18}></CiHeart></button>
            </div>
        </div>
    </div>


        </div >
    );
};

export default ProductDetails;