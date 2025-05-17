import React from 'react'

import bannerImg from "../../assets/JSGuidelearntoprofessional.png"
import bannerImg1 from "../../assets/EffectiveJs.png"
import bannerImg2 from "../../assets/JSjohnduckett.png"

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row px-6 items-center py-16 gap-12 font-primary text-4xl text-bold">
        <div className='md:w-1/2 w-full'>
          <h1 className='md:text-3xl text-2xl font-medium mb-7'>Hot Off the Press</h1>
          <p className='mb-10 text-lg'>A bestseller with no slowdown! Books that book lovers choose again, buy again, and recommend to others, with special promotions that do not require waiting for a festival. If you like any of them, don't wait!</p>
          <button className='bton btn-primary text-white'>Subscribe</button>
        </div>

        <div className='flex md:w-1/2 max-w-fit items-end'>
          <img src={bannerImg1} alt="" className='object-cover w-40' />
        </div>

        <div className='flex md:w-1/2 max-w-fit items-end'>
          <img src={bannerImg} alt="" className='object-cover w-60' />
        </div>
        
        <div className='flex md:w-1/2 max-w-fit items-end'>
          <img src={bannerImg2} alt="" className='object-cover w-50' />
        </div>
      </div>
    </>
  )
}

export default Banner