import React, { createContext, useState } from 'react'
import { Products, Products2 } from '../../utils/product'
export const UserShopContext = createContext()
const ShopContext = ({ children }) => {
    const getDefaultCart = () => {
        const cart = [];
        for (let i = 0; i < Products.length + Products2.length; i++) {
            cart[i] = 0;
        }
        return cart;
    };
    console.log(Products)
    console.log(Products2)
    const [cartItem, setCartItems] = useState(getDefaultCart)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item)) || Products2.find((product) => product.id === Number(item));
                totalAmount += cartItem[item] * itemInfo.price;
            }
        };
        return totalAmount.toFixed(2);
    };
    const getTotalCartProducts = () => {
        let totalProducts = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalProducts += cartItem[item];
            }
        }
        return totalProducts;
    };
    const addToCart = (productId) => {
        console.log("hiii")
        setCartItems((prev) => ({
            ...prev,
            [productId]: prev[productId] + 1
        
        }));
    };

    const removeToCart = (productId) => {
        setCartItems((prev) => ({
            ...prev,
            [productId]: prev[productId] - 1
        }));
    };

    const updateCartItemCount = (newAmount, productId) => {
        setCartItems((prev) => ({
            ...prev,
            [productId]: newAmount
        }));
    };
    const clearCart = () => {
        const updatedCartItems = {};
        for (const productId in cartItem) {
            updatedCartItems[productId] = 0;
        }
        setCartItems(updatedCartItems);
    };
    const viewProductDetails = (productId) => {
        setSelectedProduct(productId);
    };

    const closeProductDetails = () => {
        setSelectedProduct(null);
    };
    const resetCart = () => {
        setCartItems([]);
    };


    const value = {
        resetCart,
        closeProductDetails,
        viewProductDetails,
        clearCart,
        updateCartItemCount,
        removeToCart,
        addToCart,
        getTotalCartAmount,
        getTotalCartProducts,
        selectedProduct,
        cartItem,
        setCartItems

    }
    return (
        <UserShopContext.Provider value={value}>
            {children}
        </UserShopContext.Provider>
    )
}

export default ShopContext;