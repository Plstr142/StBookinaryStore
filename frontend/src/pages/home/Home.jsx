import React from 'react'
import UserNameInput from '../../components/UserNameInput.jsx'
import Banner from './Banner.jsx'
import TopSellers from './TopSellers.jsx'

const Home = () => {


  // console.log("Re-rendered")

  
  return (
    // border border-yellow-400
    <>
      <Banner />
      <TopSellers />
      
      <UserNameInput />
    </>
  )
}

export default Home