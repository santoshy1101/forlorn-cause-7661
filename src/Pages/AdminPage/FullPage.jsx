import React from 'react'
import ProductCrud from './ProductCrud'

const FullPage = () => {
  return (
    <div>
        <ProductCrud/>
        <FullPage/>
    </div>
  )
}

export default FullPage