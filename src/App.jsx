import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AppShowcase from './components/AppShowcase'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <Gallery />
      <Contact />
    </>
  )
}

export default App