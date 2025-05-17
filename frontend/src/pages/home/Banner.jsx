import React from 'react'

import bannerImg from "../../assets/JSGuidelearntoprofessional.png"
import bannerImg1 from "../../assets/EffectiveJs.png"
import bannerImg2 from "../../assets/JSjohnduckett.png"

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse px-15 items-center py-16 gap-12 font-primary text-4xl text-bold">
        <div className='flex md:w-1/2 max-w-fit items-center md:justify-end'>
          <img src={bannerImg1} alt="" className='object-cover w-40' />
        </div>

        <div className='flex md:w-1/2 max-w-fit items-center md:justify-end'>
          <img src={bannerImg} alt="" className='object-cover w-60' />
        </div>
        
        <div className='flex md:w-1/2 max-w-fit items-center md:justify-end'>
          <img src={bannerImg2} alt="" className='object-cover w-50' />
        </div>

        <div className='md:w-1/2 w-full'>
          <h1 className='md:text-3xl text-2xl mb-7 font-bold'>Hot Off the Press</h1>
          <p className='mb-10 text-lg'>Update your reading list to stay on trend with the latest books everyone's talking about! Whether it's a dramatic novel or a thought-provoking documentary, get ready because you won't be able to stop reading!</p>
          <button className='bton btn-primary text-white'>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default Banner