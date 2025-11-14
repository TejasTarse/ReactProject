import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs/>} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
