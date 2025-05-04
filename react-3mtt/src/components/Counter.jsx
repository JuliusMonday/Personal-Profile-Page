import { useState, useEffect } from "react"
import "./Counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("Welcome to the counter!")
    // add button function
    const addCounter = () => {
        setCounter((previousCount) => previousCount + 1)
    }
    const decrementCounter = () => {
        setCounter((previousCount) => {
            if (previousCount < 1) {
                return 0
            } else {
                return previousCount - 1
            }
            
        })
    }
    // modification of messsages

    useEffect(() => {
        if (counter == 0) {
            setMessage(
                <>
                You've reached the limit!! Can't go below{" "}
                <span className="counter-color">{counter}</span>
              </>
            )
        } else if (counter > 0) {
            setMessage(
                <>
                  You've increased counter to{" "}
                  <span className="counter-color">{counter}</span>!
                </>
              );
        } else {
            setMessage(
                <>
                  You've decreased counter to{" "}
                  <span className="counter-color">{counter}</span>!
                </>
              );
        }
    },[counter])
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
                      <p className="message-txt">{ message }</p>
                </div>
                <div className="button-container">
                    <div className="decrease-btn" onClick={decrementCounter}>
                        <i className="fas fa-minus text-xl"></i>
                    </div>
                    <div className="increase-btn" onClick={addCounter}>
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