import React, { useState } from 'react'

import ProductView from './ProductView'

const FullPage = () => {
  const [update,setUpdate]=useState(false)
  return (
    <div>
   
      
        <ProductView update={update} setUpdate={setUpdate}/>
    </div>
  )
}

export default FullPage