import { React, useState, useEffect, useContext } from 'react'
import classes from './mobileNav1.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineAccountCircle } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import close from '../../../assets/svg/x-solid.svg'
import Logo from '../../../assets/images/logo.png'
import { Quick } from '../../../utils/quick';
import { NavContent, NavList } from '../../../utils/nav';
import { Link } from 'react-router-dom';
import { UserShopContext } from '../../contextApi/shopContext';

const MobileNav = () => {
    const [click, setClick] = useState(false)
    const toggler = () => {
        setClick(!click)
    }
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    })
    const {
        getTotalCartAmount,
        getTotalCartProducts,
    } = useContext(UserShopContext)
    const totalAmount = getTotalCartAmount();
    const totalProducts = getTotalCartProducts();
    return (
        <>
            <div className={classes.main}>
                <div className={classes.mobile}>
                    <div>
                        <GiHamburgerMenu onClick={toggler} />
                    </div>
                    <img src={Logo} alt="" />
                    <div className={classes.cartMobile}>
                        <MdOutlineAccountCircle style={{ fontSize: "28px", color: 'rgba(234,157,90,255)' }} />
                        <Link to={'/cart'}>
                            <AiOutlineShoppingCart style={{ fontSize: "28px", color: 'rgba(234,157,90,255)' }} />
                            <span>{totalProducts}</span>
                        </Link>
                    </div>
                    {
                        click &&
                        <nav className={classes.nav}>
                            <div className={classes.close}>
                                <img onClick={toggler} src={close} alt="" />
                            </div>
                            <div>
                                <div className={classes.search}>
                                    <input type="text" placeholder='Find Products' />
                                    <button>search</button>

                                </div>
                                <div className={classes.navMenu}>
                                    {NavContent.map((items, i) => {
                                        return (
                                            <Link onClick={toggler} to={items.Link} {...items}>
                                                {items.Name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </nav>
                    }
                </div>
            </div>
        </>
    )
}

export default MobileNav