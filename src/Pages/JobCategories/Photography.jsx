import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { database } from '../../assets'

const Photography = () => {
  return (
    <CategoriesTemplate
    catTitle={"Photography"} 
    preview={<CatCard image={<img src={database} alt='' />} title={"Social Media Expert"} vacancyNum='3' />}
    />
  )
}

export default Photography