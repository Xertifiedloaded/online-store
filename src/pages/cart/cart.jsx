import React, { useContext, useState } from 'react'
import { UserShopContext } from '../../components/contextApi/shopContext';
import { Products, Products2 } from '../../utils/product';
import classes from './cart.module.css'

import Cartitem from '../../components/cartItem/Cartitem';
const Cart = () => {
    const {
        getTotalCartAmount,
        cartItem,
    } = useContext(UserShopContext)
    const [text, setText] = useState("")

    const Cart = getTotalCartAmount();
    return (
        <>
                {
                    Cart > 0 ?
                        [...Products, ...Products2].map((products, index) => {
                            if (cartItem[index] !== 0) {
                                return <Cartitem index={index} {...products} />
                                
                            }
                           
                        })
                        :
                        <div className={classes.empty}>
                            <div>
                                <h1>Your Cart 🛒 is empty 😭</h1>
                                <p>kindly select an item</p>
                            </div>
                        </div>
                }

         

        </>
    )
}

export default Cart;

// 