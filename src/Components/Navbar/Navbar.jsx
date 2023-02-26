import React from 'react'
import  logo from "../../Assets/logo.png";
import  {FaUserAlt} from "react-icons/fa"
import  {FiHeart} from "react-icons/fi"
import  {BsBag} from "react-icons/bs"
import  {FiSearch} from "react-icons/fi"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div >
    <div className='hidden sm:block'>
    
   
      <ul className='flex items-center justify-between px-10 text-slate-100 bg-slate-700 '>
      <ul  className='flex items-center justify-around font-bold text-[14px] sm:text-lg gap-x-10'>
     <Link to="/men"> <li><div className='w-[100px] py-1'>
     <img className='w-[100%] rounded-2xl ' src={logo} alt="" />
     </div></li></Link>
     <Link to="/women"> <li>WOMEN</li></Link>
      <Link to="/men" ><li>MEN</li></Link>
      </ul>
    
      <li className='hidden md:block'>
        <div className='flex  items-center outline-none  justify-between text-black lg:w-[500px]  md:w-[350px] h-[35px] bg-white  px-2 rounded-full'>
          <input type="text" placeholder='Search for items and brands' className='w-[100%] h-[35px] outline-none  rounded-full'/> 
          <FiSearch size={20} />
        </div>
      </li>
      <ul className='flex items-center justify-between gap-x-9'>
      <li><FaUserAlt size={20}/></li>
      <li><FiHeart size={20}/></li>
      <li><BsBag size={20}/></li>
      </ul>
      
      </ul>
      </div>
      <div className='block md:hidden'>
      <div className='flex items-center justify-center m-auto my-5 '>
      <div className='flex items-center justify-between px-2 text-black bg-white rounded-full outline-none ring-2 sm:w-[400px] w-[90%]'><input type="text" placeholder='Search for items and brands' className='  sm:w-[100%] h-[35px] outline-none  rounded-full'/> <FiSearch size={20} /></div>
      </div>
      </div>

    </div>
  )
}

export default Navbar