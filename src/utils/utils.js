
// add cart to localstorage

import toast from "react-hot-toast";

const handleAddToCartToLocalStorage = (product) => {
    const cart = getCartFromLocalStorage();
    const isExist = cart.find((item) => item.product_id == product.product_id);

    if (isExist) {
        return toast.error('item already exists in Cart')
    }
    else {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Successfully added to cart')
    }

}


//get all cart items from localstorage
const getCartFromLocalStorage = () => {
    const all = JSON.parse(localStorage.getItem('cart'))

    if (all) {
        return all;
    } else {
        return [];
    }
}



// add wishlist to localstorage
const handleAddToWishlistToLocalStorage = (product) => {
    const cart = getWishlistFromLocalStorage();
    const isExist = cart.find((item) => item.product_id == product.product_id);

    if (isExist) {
        return toast.error('item already exists in Wishlist')
    }
    else {
        cart.push(product)
        localStorage.setItem('wishlist', JSON.stringify(cart))
        toast.success('Successfully added to wishlist')
    }
}


    //get all wishlist items from localstorage

    const getWishlistFromLocalStorage = () => {
        const all = JSON.parse(localStorage.getItem('wishlist'))

        if (all) {
            return all;
        } else {
            return [];
        }
    }

    export { handleAddToCartToLocalStorage, getCartFromLocalStorage, getWishlistFromLocalStorage, handleAddToWishlistToLocalStorage }
//remove from localstorage
