import { useState } from "react"
import './index.css'

function App() {
  const [color, setColor] = useState("White")

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <div className="Buttons">
        <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={()=>setColor("brown")} style={{backgroundColor:"brown"}}>Brown</button>
        <button onClick={()=>setColor("olive")} style={{backgroundColor:"olive"}}>Olive</button>
        <button onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>Black</button>
        <button onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
      </div>
    </div>
  )
}

export default App
