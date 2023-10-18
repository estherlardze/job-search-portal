import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Achievement from '../../components/Achievement'
import Categories from '../../components/JobCategories/Categories'

const Home = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Achievement/>
      <Categories/>
    </div>
  )
}

export default Home
