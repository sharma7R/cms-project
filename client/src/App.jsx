import { useState } from 'react'
import './App.css'
import Signinup from './pages/Signinup'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup/>
    </>
  )
}

export default App
