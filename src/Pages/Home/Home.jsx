import React from 'react'
import {Navbar, Hero, Achievement, Categories, Jobs,
   About, Testimonial, Benefit, Download, Blogs, Footer}
    from '../../components/index'


const Home = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Achievement/>
      <Categories/>
      {/*<Jobs/>*/}
      <About/>
      <Testimonial/>
      <Benefit/>
      <Download/>
      {/*<Blogs/>*/}
      <Footer/>
    </div>
  )
}

export default Home
