import React from 'react'
import LoginPage from './LoginPage'
import HodResister from './HodResister'
import Home from './Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function Main() {
  return (
    <>
{/* <LoginPage/> */}
{/* <HodResister/> */}
{/* <Home/> */}
{/* <LoginPage/> */}
<RouterProvider router={router}/>
    </>
  )
}

export default Main