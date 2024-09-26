import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
       <header>
        header
       </header>
       <main>
        <Outlet />
       </main>
       <footer>
        copy right &copy; 2024
       </footer>
    </>
  )
}

export default Layout
