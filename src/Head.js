import React from 'react'
import './App.css';
import './Body'

function Head() {
  return (
    <div className="App">
      <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">
              <h4>You have items in shopping cart</h4>
            </p>
            <hr/>
            <div className="cart-items-container">
                  <h1>Empty Cart</h1>
            </div>
        </section>
    </div>
  )
}
export default Head
