import React, { useEffect, useState } from 'react'
import classes from './header.module.css'
import Top from '../../Topmobile/Top/Top'
import Second from '../../Topmobile/second/Second'

const Header = () => {
  const [top, setTop] = useState(window.innerWidth)
  useEffect(() => {
    const setWidth = () => {
      setTop(window.innerWidth)
    }
    window.addEventListener('resize', setWidth)
  })
  return (
    <>
      {top > 600 ?
        <Top /> :
        <Second />
      }
    </>
  )
}

export default Header