import React from 'react'
import classes from './hero.module.css'
import heroImg from '../../assets/images/heroImg.jpeg'
const Hero = () => {
    return (
        <>
            <div className={classes.heroImgCon}>
                <div className={classes.heroContent}>
                    <small className={classes.small}>Trade in offer</small>
                    <h1>Super Value Deals</h1>
                    <h2>On all products</h2>
                    <p>Save more today with Apneck</p>
                    <div className={classes.btn}>
                        <button>shop now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;