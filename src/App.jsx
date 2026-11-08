import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import Header from './header'
import Side from './side'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Side username="c/qani" age="22" phone="636295999" address="ahmed-dhagax"/>
    
     
    </>
  )
}

export default App
