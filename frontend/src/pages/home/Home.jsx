import React, { useState, useEffect } from 'react'
import TopSellers from './TopSellers'
import Banner from './Banner'

const Home = () => {
  return (
    <>
      <Banner/>
      <TopSellers/>
    </>
  )
}

export default Home