import React from 'react'
import classes from './landing.module.css'
import Hero from '../../components/hero/hero'
import Quick from '../../components/QuickAccess/QuickAccess'
import QuickAccess from '../../components/QuickAccess/QuickAccess'
import Features from '../../components/faetures/Features'
import Repair from '../../components/Repair/repair'
const Landing = () => {
  return (
    <>
      <div className={classes.main}>
        <Hero />
        <QuickAccess />
        <Features />
        <Repair />
      </div>
    </>
  )
}

export default Landing;