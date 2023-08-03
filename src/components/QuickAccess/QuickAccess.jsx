import React from 'react'
import image from '../../assets/images/calenderIcon.png'
import { Quick } from '../../utils/quick'


import classes from './quickAccess.module.css'
const QuickAccess = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.boxContainer}>
                    {
                        Quick.map((items, i) => {
                            return (
                                <div {...items} className={classes.box1}>
                                    <div className={classes.imgCont}>
                                        <img src={items.Image} alt="" />
                                    </div>
                                    <h4>{items.Name}</h4>
                                </div>
                            )
                        })
                    }

                </div>
          </div>
        </>
    )
}

export default QuickAccess