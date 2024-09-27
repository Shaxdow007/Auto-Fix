import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar />
       <main>
        <Outlet />
       </main>
       <Footer />
    </>
  )
}

export default Layout
