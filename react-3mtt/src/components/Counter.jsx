import { useState } from "react"
import "./Counter.css"
const Counter = () => {
    const [counter, setCounter] = useState(0);
    // add button function
    const addCounter = () => {
        setCounter((previousCount)=> previousCount + 1)
    }
    const decrementCounter = () => {
        setCounter((previousCount)=>previousCount-1)
    }
  return (
      <>
          <div className="counter-container">
            <header className="counter-header">
                <h2 className="header-txt">JuTeLabs Counter</h2>
            </header>
            <main className="display-container">
                <div className="screen">
                      <h1 class="gradient-text">{ counter }</h1>
                </div>
                <div className="message-container">
                    <p className="message-txt">Welcome to the counter!</p>
                </div>
                <div className="button-container">
                    <div className="minus-btn" onClick={decrementCounter}>
                        <i className="fas fa-minus text-xl"></i>
                    </div>
                    <div className="add-btn" onClick={addCounter}>
                        <i className="fas fa-plus text-xl"></i>
                    </div>
                </div>
            </main>
            <footer className="counter-footer">
                <p className="footer-txt">Click the buttons to change the counter value</p>
            </footer>
          </div>
          
      
      </>
  )
}

export default Counter