import React from 'react'
import classes from './shopProduct.module.css'
import { useContext } from 'react'
import { UserShopContext } from '../contextApi/shopContext'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
const Shopproduct = ({ id, name, image, status, rate, brand, price }) => {
    const {
        viewProductDetails,
        addToCart,
        cartItem,
    } = useContext(UserShopContext)
    const cartItemAmount = cartItem[id]
    return (

        <>
            <section className={classes.row} >
                <div key={id} className={classes.card}>
                    <div className={classes.items}>
                        <div className={classes.cardImg}>
                            <img src={image} alt="" />
                        </div>
                        <div className={classes.details}>
                            <span>{brand}</span>
                            <h5>{name}</h5>
                        </div>
                        <div className={classes.starIcon}>
                            <div className={classes.productName}>
                                <span>{price}</span><span>{rate}</span>
                            </div>
                            <div className={classes.star}>
                                <ReactStars
                                    count={5}
                                    edit={true}
                                    value={4}
                                    size={20}
                                    activeColor="rgb(234, 157, 90)"
                                />
                            </div>
                            <div className={classes.viewDetails}>
                                <Link to={'/details'} onClick={() => viewProductDetails(id)}>view Details</Link>
                                <button onClick={() => addToCart(id)}>
                                    <span>Add To cart</span>
                                    <span>
                                        {cartItemAmount > 0 && cartItemAmount}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Shopproduct