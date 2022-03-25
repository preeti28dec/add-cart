import React, { useState } from 'react';
import './App.css';
import Footer from './Footer'
import { products } from './product';


const Body = () => {
  const [data, setData] = useState(products);

  const IncNum = (id) => {
    let newData = data.map((element) => {
      if (element.id === id) {
        element.quantity += 1
      }
      return element
    })
    // console.log(newData);
    setData(newData)
  };
  const DicNum = (id) => {
    let newData = data.map((element) => {
      if (element.id === id) {
        element.quantity -= 1
      }
      console.log(element.price);
      return element
      
    })
    // console.log(newData);
    setData(newData)
  }
  return (
    <>
      {
        data.map((item, index) => {
          return (
            <div className="cart-items">
              <div className="items-info">
                <div>
                  <img src={item.img} alt="tp" />
                </div>
                <div className="title">
                  <h1>{item.title}</h1>
                </div>
                <div className="add-minus-h1">
                  <span className="minus" onClick={() => DicNum(item.id)}>-</span>
                  <button className='coun-button'>{item.quantity}</button>
                  <span className="add" onClick={() => IncNum(item.id)}>+</span>
                </div>
                <div className="price">
                  <h3 onClick={IncNum}>₹{item.price * item.quantity}</h3>
                </div>
              </div>

              <div>
                </div>
            </div>
          )
        })
      }
      <Footer  />

    </>
  );
};

export default Body;