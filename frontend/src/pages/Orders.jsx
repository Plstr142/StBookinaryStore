import React from 'react'
import Banner from './home/Banner'
import TopSales from './home/TopSales'

const Orders = () => {
  return (
     // border border-yellow-400
     <>
      <div className="flex flex-col md:flex-row px-15 items-center py-16 gap-12 font-primary text-4xl text-bold border border-black">
        <div className='border border-black'>Order</div>  
      {/* 
        <Banner />
        <TopSales /> */}
      </div>
     </>
  )
}

export default Orders