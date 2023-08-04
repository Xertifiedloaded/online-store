import React from 'react'
import classes from './cartItem.module.css'
import { useContext } from 'react'
import { UserShopContext } from '../contextApi/shopContext'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { FiDelete } from 'react-icons/fi'
const Cartitem = ({ brand, price, instock, image, name, index }) => {
    const {
        getTotalCartAmount,
        cartItem,
        addToCart,
        removeToCart,
        updateCartItemCount
    } = useContext(UserShopContext)
    const Cart = getTotalCartAmount();
    return (
        <>
            <section className={classes.section1}>
                <div className={classes.cartSection}>
                    <div className={classes.cartItem}>
                        <div className={classes.cart}>
                            <div className={classes.cartImgContainer}>
                                <img src={image} alt="" />
                            </div>
                            <div className={classes.cartDetailsBox}>
                                <h1>{name}</h1>

                                <p>BrandName:<span>{brand}</span></p>
                                <p>ProductPrice:<span>{price}</span></p>
                                <p>ProductNumber:<span>{price}</span></p>
                                <p>Items In Stock:<span>{instock}</span></p>
                                <div className={classes.coupon}>
                                    <div className={classes.qty}>
                                        <div className={classes.itemQty}>
                                            <button onClick={() => addToCart(index)}>
                                                <FiPlus />
                                            </button>
                                            <span>{cartItem[index]}</span>
                                            <button onClick={() => removeToCart(index)}>
                                                <FiMinus />
                                            </button>
                                        </div>
                                        <div className={classes.delete}>
                                            <button onClick={() => removeToCart(index)}>
                                                <FiDelete style={{ color: "white" }} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={classes.input}>
                                        <input type="text" placeholder='enter coupon code' />
                                    </div>
                                </div>

                            </div>
                        </div>
                 
                    </div>

                </div>

            </section>
        </>
    )
}

export default Cartitem