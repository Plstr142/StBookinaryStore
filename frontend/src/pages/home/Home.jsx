import React from 'react'
import UserNameInput from '../../components/UserNameInput.jsx'
import Banner from './pages/home/Banner.jsx'
import TopSales from './pages/home/TopSales.jsx'

const Home = () => {


  // console.log("Re-rendered")

  
  return (
    // border border-yellow-400
    <>
      <Banner />
      <TopSales />
      
      <UserNameInput />
    </>
  )
}

export default Home