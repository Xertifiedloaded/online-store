import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './Layout/layout'
import Landing from './pages/landing/landing'
import Shop from './pages/shop/shop'
import Blog from './pages/blog/blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Landing/>,
                },
                {
                    path: "/shop",
                    element: <Shop/>,
                },
                {
                    path: "/blog",
                    element: <Blog/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
            ]
        }
    ]

    )
}

export default Router