import React, { useState } from "react"
import "./app.css"

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <header className="app-header">
        <div>Hello Guys</div>
        <button onClick={() => setCount(count => count + 1)}>Count is {count}</button>
      </header>
    </div>
  )
}

export default App
