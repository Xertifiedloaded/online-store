import React from 'react'
import classes from './footer.module.css'
import Google from '../../../assets/images/googlePlay.jpeg'
import Apple from '../../../assets/images/applwStore.jpeg'
import method from '../../../assets/images/payWith.png'
import { AiFillGithub } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { BiLogoTwitter } from 'react-icons/bi'
import { AiOutlineSlack } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.main}>
          <div className={classes.footer_items}>
            <legend>Contact</legend>
            <p >
              <span>Address:</span>
              <span>Top hostel Funaab Agbede</span>
            </p>
            <p >
              <span>Phone:</span>
              <span>Call us at +2348168043011</span>
            </p>
            <p >
              <span>Hours:</span>
              <span>From 8pm To 6pm</span>
            </p>
            <p>Follow the developer</p>
            <div className={classes.icons}>
              <Link>
                <BsDiscord className='eachIcon' /></Link>
              <Link>
                <BiLogoTwitter className='eachIcon' /></Link>
              <Link>
                <AiFillGithub className='eachIcon' />
              </Link>
              <Link>
                <AiOutlineSlack className='eachIcon' /></Link>
            </div>
          </div>
          <div className={classes.footer_items}>
            <legend>About</legend>
            <a href="/about">
              About Us
            </a>
            <a href="#">
              Delivery
            </a>
            <a href="#">
              Privacy Policy
            </a>
            <a href="#">
              Terms & Conditions
            </a>
            <a href="#">
              Fee Policy
            </a>
          </div>
          <div className={classes.footer_items}>
            <legend>Account</legend>
            <a href="#">
              profile
            </a>
            <a href="#">
              View Cart
            </a>
            <a href="#">
              help
            </a>
            <a href="#">
              payments

            </a>
            <a href="#">
              my wishList

            </a>
            <a href="#">
              coupons
            </a>
          </div>
          <div className={classes.footer_items}>
            <legend>Install App</legend>
            <p>Available On Google Play Services & App Store</p>
            <div className={classes.store}>
              <img src={Google} alt="" />
            </div>
            <div className={classes.store}>
              <img src={Apple} alt="" />
            </div>
            <h5>Payment Methods</h5>
            <div className={classes.methods}>
              <img src={method} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer