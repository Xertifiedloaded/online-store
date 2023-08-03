import React from 'react'
import classes from './faetures.module.css'
import Productfeatures from './productFeature/Productfeatures'
const Features = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.feature}>
                    <h1>Featured Products</h1>
                    <h6>All Weather New Modern Designs</h6>
                </div>
                <div className={classes.featuredProduct}>
                    <Productfeatures />
                </div>
            </div>
        </>
    )
}

export default Features