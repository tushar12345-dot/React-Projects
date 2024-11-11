import { useState } from 'react'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(1)
  //let Counter=1
  const addValue = () => { 
  
    Counter = Counter + 1
    setCounter(Counter)
    console.log('Clicked', Counter)
  }
  const removeValue = () => { 
    Counter = Counter - 1
    setCounter(Counter)
    
    console.log('Clicked', Counter)
    if (Counter <0) { 
      Counter=0
    }
    setCounter(Counter)
  }
  return (
    <div>
      <h1>Hello</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  ); 
}

export default App
