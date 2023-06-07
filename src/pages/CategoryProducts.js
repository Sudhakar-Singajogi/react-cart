import React from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home';

function CategoryProducts() {
    let {string:category} = useParams()
    category = category.slice(0, 1).toUpperCase()+category.slice(1);

  return (
    <>
    <div>{category} Products</div>
    <Home params={{category}}/>
    
    </>
    

  )
}

export default CategoryProducts