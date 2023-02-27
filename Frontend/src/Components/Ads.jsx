import React from 'react'

const Ads = () => {
  return (
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
  )
}

export default Ads