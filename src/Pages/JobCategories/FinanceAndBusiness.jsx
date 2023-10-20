import React from 'react'
import CategoriesTemplate from '../../components/Categories/CategoriesTemplate'
import CatCard from '../../components/Category/catCard/CatCard'
import { uiux } from '../../assets'

const FinanceAndBusiness = () => {
  return (
    <CategoriesTemplate 
    catTitle={"Finance And Business"} 
    preview={<CatCard image={<img src={uiux} alt='' />} title={"Junior UI/UX Designer"} vacancyNum='5' imgBg='bg-black' />}
    />
  )
}

export default FinanceAndBusiness