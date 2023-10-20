import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { project } from '../../assets'

const ArtAndMusic = () => {
  return (
    <CategoriesTemplate 
    catTitle={"Art & Music"} 
    preview={<CatCard image={<img src={project} alt='' />} title={"IT Project Manager"} vacancyNum='6' imgBg='bg-[#47586d]' />}
    />
  )
}

export default ArtAndMusic