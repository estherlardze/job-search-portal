import React from 'react'
import {Navbar, Footer} from '../../components/index'
import Detail from './Detail'

const BlogDetail = () => {
  return (
    <section className='w-[100%] overflow-hidden'>
      <Navbar/>
      <Detail/>
      <Footer/>
    </section>
  )
}

export default BlogDetail
