import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around text-[#666666] bg-[#eeeeee] py-5 text-[6px] sm:text-sm lg:text-base' >

    <ul className='flex flex-col gap-y-3'>
    <li className='font-bold'>HELP AND INFORMATION</li>
    <li>Help</li>
    <li>Track order</li>
    <li>Delivery & returns</li>
    <li>ASOS Premier</li>
    <li>10% Student Discount</li>
    <li>Sitemap</li>
    </ul>

    <ul className='flex flex-col gap-y-3'>
    <li className='font-bold'>ABOUT ASOS</li>
    <li>About us</li>
    <li>Careers at ASOS</li>
    <li>Carporate reponsibility</li>
    <li>Investors'site</li>
    </ul>
    
    <ul className='flex flex-col gap-y-3'>
    <li className='font-bold'>MORE FROM ASOS</li>
    <li>Mobile and ASOS apps</li>
    <li>ASOS Marketplace</li>
    <li>E-gift cards</li>
    <li>Black Friday</li>
    <li>Refer A Friend</li>
    </ul>
    
    <ul className='flex flex-col gap-y-3'>
    <li className='font-bold'>SHOPPING FROM:</li>
   <li>You're in  <span className='font-bold'>| CHANGE </span></li>
    </ul>
    
    </div>
  )
}

export default Footer