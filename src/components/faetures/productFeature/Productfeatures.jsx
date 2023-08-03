import React from 'react'
import classes from './productFeatures.module.css'
import { Products } from '../../../utils/product'
const Productfeatures = () => {
    return (
        <>
            <div className={classes.row}>
                {Products.slice(2, 6).map((items) => {
                    return (
                        <div key={items.id} className={classes.card}>
                            <div className={classes.items}>
                                <div className={classes.cardImg}>
                                    <img src={items.image} alt="" />
                                </div>
                                <div className={classes.details}>
                                    <span>{items.brand}</span>
                                    <h5>{items.name}</h5>
                                </div>
                                <div className={classes.rating}>
                                    <p>{items.status}</p>
                                    <p>{items.rate}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Productfeatures