import React from 'react'
import classes from './landing.module.css'
import Hero from '../../components/hero/hero'
import Quick from '../../components/QuickAccess/QuickAccess'
import QuickAccess from '../../components/QuickAccess/QuickAccess'
import Features from '../../components/faetures/Features'
const Landing = () => {
  return (
    <>
      <div className={classes.main}>
        <Hero />
        <QuickAccess />
        <Features/>
      </div>
    </>
  )
}

export default Landing;