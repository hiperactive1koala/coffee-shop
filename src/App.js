import React from 'react'


import Navbar from './components/Navbar/Navbar'
import Home from './components/_Home/Home'
import About from './components/_About/About'
import Types from './components/_Types/Types'
import Collections from './components/Collections/Collections'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Types/>
        <Collections/>
        <Contacts/>
    </div>
  )
}

export default App