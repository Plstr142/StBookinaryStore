import React, { useState, useEffect } from 'react'
import TopSellers from './TopSellers'
import Banner from './Banner'
import Recommended from './Recommended'

const Home = () => {
  return (
    <>
      <Banner/>
      <TopSellers/>
      <Recommended />
    </>
  )
}

export default Home