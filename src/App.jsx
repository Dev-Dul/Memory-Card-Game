import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import CardParent from './Components/Parent'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div className="container">
      <Home count={count} handleClick={handleClick} />
      <CardParent count={count} />
    </div>
  )
}

export default App
