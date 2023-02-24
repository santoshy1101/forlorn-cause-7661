import React from 'react'
import men from "../../Assets/mens.jpg"
const Men = () => {

  return (
    <div>
      <div className="flex gap-x-4 justify-end px-3  items-center border-b">
        <div className="h-[25px] border border-gray-400 hidden lg:block ">
          {' '}
        </div>
        <p>Marketplace</p>
        <div className="h-[25px] border border-gray-400 hidden lg:block ">
          {' '}
        </div>
        <p>Help&FAQs</p>
        <div className="h-[25px] border border-gray-400 hidden lg:block ">
          {' '}
        </div>
        <div className="h-[20px] hover:border-2 hover:bg-blue-500 w-[30px] rounded-3xl ">
          <img
            className="h-[100%] object-cover  rounded-3xl w-[100%]  "
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/383px-Flag_of_the_United_States.svg.png"
            alt=""
          />
        </div>
        <div className="h-[25px] border border-gray-400 hidden lg:block ">
          {' '}
        </div>
      </div>

      <div className="flex justify-around text-center font-semibold mb-[2px]">
        <p className=" cursor-pointer hover:border-2 border-gray-500 bg-[#ff385c] w-[100%]">
          UP TO 50% OFF LAYERING LEGENDS!
          <br />
          COATS, HOODIES AND MORE
        </p>
        <p className="hover:border-2 border-gray-500 cursor-pointer w-[100%]">
          ASOS PREMIER
          <br />
          Unlimited Next Day Delivery – just $24.99 a year!
        </p>
      </div>

      <div className="text-center font-extrabold text-4xl p-4 font-[latin] bg-[#ff385c] text-black">
        <p>
          UP TO 50% OFF
          <br />
          LAYERING LEGENDS!
          <br />
          COATS, HOODIES AND MORE
          <br />
          <p className="text-sm font-[400] my-5">
            Limited time only. Selected styles marked down as shown.
          </p>
        </p>
      </div>

      <div style={{backgroundImage: `url(${men})`}} className='w-[95%] h-[600px] m-auto bg-no-repeat bg-contain my-6 flex justify-center items-center flex-col'>

      <p className ='bg-slate-100 inline-block font-bold text-5xl  leading-[4rem] py-5 px-4 rounded-md text-center relative top-12'>
      Just-dropped ft.
      <br />
      The North Face
      </p>

     <a href="#"> <div className='bg-slate-100 font-bold text-xl hover:text-slate-100 hover:bg-black duration-300  px-10 py-2 relative top-[7rem]'>SHOP NOW</div></a>
 
      </div>






  



  



    </div>
  )
}

export default Men
