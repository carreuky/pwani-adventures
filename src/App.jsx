import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className=''>
    <NavBar/>
    <Home/>
    </section>
  )
}

export default App
