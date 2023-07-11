import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import CardGrid from './CardGrid'
import Card from './Card'

function Main() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <Card/>
        <CardGrid/>
    </div>
  )
}

export default Main