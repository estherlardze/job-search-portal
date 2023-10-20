import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { networkEngineer } from '../../assets'

const Marketing = () => {
  return (
    <CategoriesTemplate 
    catTitle={"Marketing"} 
    preview={<CatCard image={<img src={networkEngineer} alt='' />} title={"Content Writer and Speaker"} vacancyNum='4' imgBg='bg-[#0071dc]' />}
    />
  )
}

export default Marketing