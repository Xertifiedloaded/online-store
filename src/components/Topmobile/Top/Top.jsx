import React from 'react'
import classes from './top.module.css'
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const Top = () => {
  return (
      <>
          <div className={classes.main}>
              <div className={classes.flex}>
                  <p>The trending outfits at 100% off</p>
                  <p>
                      Call us at +2348168043011
                      <span className={classes.Icon1}>
                          <BiPhoneCall />
                          <AiOutlineMail />
                      </span>
                  </p>

              </div>
          </div> 
      </>
  )
}

export default Top