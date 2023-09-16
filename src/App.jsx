import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className=''>
    <NavBar/>
    <Home/>
    <Footer/>
    </section>
  )
}

export default App
