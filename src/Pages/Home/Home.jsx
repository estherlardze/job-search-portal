import React from 'react'
import {Navbar, Hero, Achievement, Categories, Jobs,
   About, Testimonial, Benefit, Download}
    from '../../components/index'


const Home = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Achievement/>
      <Categories/>
      <Jobs/>
      <About/>
      <Testimonial/>
      <Benefit/>
      <Download/>
    </div>
  )
}

export default Home
