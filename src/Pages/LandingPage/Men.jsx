import React from 'react'
import men from '../../Assets/mens.jpg'
import { mens_top_cat } from '../../all data/mens'
import { mens_style_cat } from '../../all data/mens'
import desktop from '../../Assets/desktop.png'
import desktop_banner from '../../Assets/mens/desktop_banner.png'
import logo_dt from '../../Assets/mens/logo_dt.png'
import { brands_logo } from '../../all data/mens'

const Men = () => {
  console.log(mens_top_cat)
  return (
    <div>
      <div className="flex items-center justify-end px-3 border-b gap-x-4">
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

      <div className="flex justify-around text-center font-semibold mb-[2px] text-xs sm:text-base">
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

      <div className="text-center font-extrabold text-xs sm:text-4xl p-4 font-[latin] bg-[#ff385c] text-black">
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

      <div
        style={{ backgroundImage: `url(${men})` }}
        className="w-[95%] h-[125px] min-[320px]:h-[200px] lg:h-[600px] md:h-[400px] sm:h-[300px] m-auto bg-no-repeat bg-contain my-6 flex justify-center items-center flex-col"
      >
        <p className="bg-slate-100 inline-block font-bold text-sm md:text-2xl lg:text-4xl lg:leading-[3.5rem] lg:py-5 sm:py-3 py-1 px-4 rounded-md text-center relative  ">
          Just-dropped ft.
          <br />
          The North Face
        </p>

        <a href="#">
          {' '}
          <div className="bg-slate-100 font-bold text-sm hover:text-slate-100 hover:bg-black duration-300  px-10 lg:py-2 relative top-[1rem] md:top-2 sm:top-5">
            SHOP NOW
          </div>
        </a>
      </div>

      <div className="grid items-center justify-center px-5 m-auto text-center sm:grid-cols-4 gap-x-5">
        {mens_top_cat.map(({ src, id, title, desc }) => {
          return (
            <div key={id} className="w-[250px] sm:w-[100%]">
              <div className="w-[100%] ring-2">
                <img className="w-[100%] h-[100%]" src={src} alt={title} />
              </div>
              <div className="my-3 leading-8">
                <p className="font-bold">{title}</p>
                <p className="font-normal">{desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div
        style={{ backgroundImage: `url(${desktop})` }}
        className="w-[100%] h-[193px] sm:h-[110px] md:h-[135px] lg:h-[160px] bg-cover bg-no-repeat sm:bg-contain my-6 flex  items-center flex-col  justify-center"
      >
        <div className="text-center text-slate-100">
          <p className="text-4xl sm:text-sm font-[latin] font-extrabold">
            DENIM BY TOPMAN
          </p>
          <p className="font-bold lg:text-xl sm:text-sm">
            Jackets, jeans shirts - your essentials are here
          </p>
        </div>
        <a href="#">
          {' '}
          <div className="px-10 lg:py-[6px] lg:mt-5 sm:mt-2 lg:text-xl font-bold duration-300 bg-[#ff5400] hover:text-[#ff5400] hover:bg-slate-100 ">
            SHOP NOW
          </div>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center text-center sm:justify-around gap-y-5 sm:flex-row">
        {mens_style_cat.map(({ src, title, desc, id }) => {
          return (
            <div key={id} className=" w-[300px] lg:w-[500px] md:w-[300px] sm:w-[250px]">
              <div className="lg:w-[100%]">
                <img className="w-[100%] h-[100%]" src={src} alt={title} />
              </div>

              <div className="my-3 leading-10">
                <p className="font-bold lg:text-3xl">{title}</p>
                <p className="text-xl font-normal">{desc}</p>
              </div>
              <button className="px-10 py-2 mt-5 text-xl font-semibold duration-300 border-2 border-black hover:bg-black hover:text-slate-50">
                SHOP THE BRAND
              </button>
            </div>
          )
        })}
      </div>

      <div
        style={{ backgroundImage: `url(${desktop_banner})` }}
        className="w-[100%] h-[141px] sm:h-[90px] md:h-[115px] lg:h-[141px] bg-cover  lg:bg-contain
          bg-no-repeat justify-center my-6 flex  items-center flex-col"
      >
        <img className="w-[100%] md:w-[40%] sm:w-[30%] relative md:top-3" src={logo_dt} alt="" />
        <div className="text-center lg:mt-5 md:mt-2">
          <p className="font-bold lg:text-2xl">
            Unlimited free Next Day Delivery for a whole year for $24.99
          </p>
          <p className="text-sm lg:mt-1">Minimum spend and Ts Cs apply</p>
        </div>
      </div>

      <div className="text-center">
        <p className="my-10 text-2xl font-bold ">TRENDING BRANDS</p>

        <div className="flex flex-col items-center justify-between my-10 sm:flex-row px-14">
          {brands_logo.map(({ id, src, title }) => {
            return (
              <img
                className="w-[183px] md:w-[120px] sm:w-[80px] h-[100%] "
                key={id}
                src={src}
                alt={title}
              />
            )
          })}
        </div>
      </div>



    
    </div>
  )
}

export default Men
