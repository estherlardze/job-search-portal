import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Achievement from '../../components/Achievement'
import Categories from '../../components/Categories/Categories'
import Jobs from '../../components/FeaturesJobs/Jobs'
import About from '../../components/Aboutsection/About'
import Testimonial from '../../components/Testimonial/Testimonial'

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
    </div>
  )
}

export default Home
