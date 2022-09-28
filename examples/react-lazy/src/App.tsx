import {useState} from 'react'
import './App.css'
import {Toggle} from 'library/dist/wrapper/react/Toggle.lazy'

function App() {
  const [showToggle, setShowToggle] = useState(false)
  const [toggled, setToggled] = useState(false)

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
      <div>Toggle button is lazy loaded when it is first rendered</div>
      <button onClick={() => setShowToggle(true)}>Show toggle</button>
      {showToggle && <Toggle checked={toggled} onChange={() => setToggled(!toggled)}/>}
    </div>
  )
}

export default App
