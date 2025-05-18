import React from 'react'
import Banner from './Banner'
import TopSales from './TopSales'
import UserNameInput from '../../components/UserNameInput'

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