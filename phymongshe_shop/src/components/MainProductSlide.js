import React from 'react'
import CategorySlider from './CategorySlider'

const MainProductSlide = ({ shopList, category }) => {
  return (
    <div>
        <CategorySlider shopList={shopList} category={category}/>
    </div>
  )
}

export default MainProductSlide