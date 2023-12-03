import React, { useContext } from 'react'
import { Products, Products2 } from '../../utils/product'
import { UserShopContext } from '../../components/contextApi/shopContext'
import Shopproduct from '../../components/shopContent/Shopproduct'
import classes from './shop.module.css'
const Shop = () => {
    const {
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
    } = useContext(UserShopContext)
    return (
        <>
            <section>
                <div className={classes.shopHero}>
                    <h1><span>#100% </span>Off On All Products</h1>
                    <p>Make your orders we will deliver..</p>
                </div>
                <div className={classes.row}>

                    {[...Products, ...Products2].map((product, id) => (
                        <Shopproduct {...product} key ={id} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default Shop