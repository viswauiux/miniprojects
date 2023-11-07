import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
      )
}

export default Home