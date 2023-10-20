import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { project, seniorDesigner } from '../../assets'

const TeachingAndStady = () => {
  return (
    <CategoriesTemplate
    catTitle={"Teaching And Stady"} 
    preview={<CatCard image={<img src={seniorDesigner} alt='' />} title={"Online English Teachers"} vacancyNum='7' imgBg='bg-[#4c48d9]' />}
    preview2={<CatCard image={<img src={project} alt='' />} title={"Senior UI/UX Designer"} vacancyNum='3' imgBg='bg-[#47586d]' />}
    />
  )
}

export default TeachingAndStady