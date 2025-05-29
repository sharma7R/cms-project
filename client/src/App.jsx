import { useState } from 'react'
import './App.css'
import Signinup from './pages/Signinup'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signinup/>
    </>
  )
}

export default App
