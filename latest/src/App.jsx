import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header' // header used as variable to catch or store  the incoming value from components
import Footer from './Components/Footer'

function App() {
  
  return (
    //we use div to wrap and return the only single value 
    <>
<Header/>
  <h1>Hello</h1>
  <h2>Thnx</h2>
<Footer/>
    </>
  )
}
//write export statement after each component to export 
export default App
