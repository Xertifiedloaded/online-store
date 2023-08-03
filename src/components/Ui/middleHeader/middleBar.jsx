import React, { useEffect, useState } from 'react'
import classes from './middleHeader.module.css'
import MobileNav from '../../mobileNav1/mobile1/mobileNav'
import MobileNav2 from '../../mobileNav1/mobile2/mobileNav2'


const MiddleBar = () => {

    const [screen, setScreen] = useState(window.innerWidth)
    useEffect(() => {
        const changeWidth = () => {
            setScreen(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
    })

    return (
        <>
            {
                screen > 600 ? <div className={classes.main}>
                    <MobileNav2 />
                </div> :
                    <MobileNav />
            }
        </>
    )
}

export default MiddleBar