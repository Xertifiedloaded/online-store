import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Ui/topHeader/header'
import Footer from '../components/Ui/footer/footer'
import MiddleBar from '../components/Ui/middleHeader/middleBar'
import ShopContext from '../components/contextApi/shopContext'

const Layout = () => {
    return (
        <>

            <ShopContext>
                <Header />
                <MiddleBar />
                <Outlet />
                <Footer />
            </ShopContext>
        </>
    )
}

export default Layout