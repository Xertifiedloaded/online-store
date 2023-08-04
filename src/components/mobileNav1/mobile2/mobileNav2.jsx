import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GrProductHunt } from 'react-icons/gr'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'
import classes from './mobile2.module.css'
import { NavContent } from '../../../utils/nav'
import { UserShopContext } from '../../contextApi/shopContext'

const MobileNav2 = () => {
    const { getTotalCartAmount, getTotalCartProducts } = useContext(UserShopContext)
    const totalAmount = getTotalCartAmount();
    const totalProducts = getTotalCartProducts();
    const Location = useLocation()
    return (

        <>
            <div className={classes.main}>
                <header>
                    <div className={classes.imgContainer}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.div}>
                        <div className={classes.search}>
                            <input type="text" placeholder='Find Product' />
                            <button>search</button>
                        </div>
                        <nav className={classes.navBar}>
                            {NavContent.map((items, i) => (
                                <Link className={Location.pathname === items.Link ? classes.active : classes.disable} to={items.Link} key={i} {...items}>{items.Name}</Link>
                            ))}
                        </nav>
                    </div>
                    <div className={classes.icon2}>
                        <GrProductHunt style={{ fontSize: "25px", color: 'rgba(234,157,90,255)' }} />
                        <MdOutlineAccountCircle style={{ fontSize: "28px", color: 'rgba(234,157,90,255)' }} />
                        <Link to={'cart'} className={classes.cartMobile}>
                            <span>
                                <AiOutlineShoppingCart style={{ fontSize: "28px", color: 'rgba(234,157,90,255)' }} />
                            </span>
                            <span>
                                {totalProducts}
                            </span>
                        </Link>
                    </div>
                </header>
            </div>
        </>
    )
}

export default MobileNav2;