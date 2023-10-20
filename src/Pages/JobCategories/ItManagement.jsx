import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { seniorDesigner } from '../../assets'

const ItManagement = () => {
  return (
    <CategoriesTemplate
    catTitle={"It Management"} 
    preview={<CatCard image={<img src={seniorDesigner} alt='' />} title={"SEO Analiyst & Reviewer"} vacancyNum='1' imgBg='bg-[#4c48d9]' />}
    />
  )
}

export default ItManagement