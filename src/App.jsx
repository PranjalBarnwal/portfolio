import React from 'react'
import Sidebar from './components/sidebar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex'>
        <Sidebar/>     
        <Home/>     
    </div>
  )
}

export default App
