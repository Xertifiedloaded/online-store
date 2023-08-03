import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Ui/topHeader/header'
import Footer from '../components/Ui/footer/footer'
import MiddleBar from '../components/Ui/middleHeader/middleBar'

const Layout = () => {
    return (
        <>
          
            <Header />
            <MiddleBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout