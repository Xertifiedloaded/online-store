import React from 'react'
import classes from './second.module.css'
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const Second = () => {
    return (
        <div className={classes.main}>
            <div className={classes.flex}>
                <p>save upto 100% </p>
                <p>
                    Call us
                </p>
                <span className={classes.Icon1}>
                    <BiPhoneCall />
                    <AiOutlineMail />
                </span>

            </div>
        </div>
    )
}

export default Second