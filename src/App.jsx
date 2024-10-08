import React from 'react'
import { motion } from 'framer-motion'

import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'

import HowToBuy from './components/HowToBuy'


function App() {


  return (
    <>

      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Footer />

      
    </>
  )
}

export default App
