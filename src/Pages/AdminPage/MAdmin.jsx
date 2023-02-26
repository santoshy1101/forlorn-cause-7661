import React, { useEffect, useState } from 'react'
import axios from 'axios'
const getCount=()=>(
    axios.get(`https://long-boa-sun-hat.cyclic.app/men`
    )
  )
  const getCountF=()=>(
    axios.get(`https://long-boa-sun-hat.cyclic.app/women`
    )
  )
const MAdmin = () => {
    const [countM,setMCount]=useState([])
    const[countF,setFCount]=useState([])

   useEffect(()=>{
    getCount().then((res)=>(
        setMCount(res.data)
    ))
   },[])
   useEffect(()=>{
    getCountF().then((res)=>(
      setFCount(res.data)
    ))
   },[])
  return (
    <div>
         Total Results {countM.reduce((a,c)=>a+1,0)+countF.reduce((a,c)=>a+1,0)}
    </div>
  )
}

export default MAdmin