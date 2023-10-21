import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function randomCount (){
    setCount(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={randomCount}>send</button>
    </>
  )
}

export default App
