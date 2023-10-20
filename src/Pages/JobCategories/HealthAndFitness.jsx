import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { seniorUIUXDesigner } from '../../assets'

const HealthAndFitness = () => {
  return (
    <CategoriesTemplate 
    catTitle={"Health And Fitness"} 
    preview={<CatCard image={<img src={seniorUIUXDesigner} alt='' />} title={"AI/Machine Learning Engineer"} vacancyNum='6' imgBg='bg-[#93d8de]' />}
    />
  )
}

export default HealthAndFitness