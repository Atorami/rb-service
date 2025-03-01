import React from 'react'

import Hero from "./Hero/Hero"
import About from "./About/About"
import Offer from './Offer/Offer'
import How from './How/How'
import CalltoAction from './CallToAction/CallToAction'
import Projects from './Projects/Projects'
import Feedback from './Feedback/Feedback'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Offer/>
      <How/>
      <CalltoAction/>
      <Projects/>
      <Feedback/>
    </>
  )
}

export default HomePage