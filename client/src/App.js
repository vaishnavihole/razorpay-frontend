import React from 'react'
import axios from 'axios'

import "./App.css"

function App() {
    const paymentHandler = (response)=>{
        console.log(response)
        alert('Payment Successful'); 
      }

    const initPayment = async (amount) => {

        const {data} = await axios.post("/createOrder", {
          amount: amount,
          notes: {
            user: "Test User",
            item: "Test Room"
          }
        })
    
        const orderId = data.order.id
        console.log(orderId);
    
        const options = {
          "key": "rzp_test_Hx1u2oka1Tudh0",
          "amount": amount * 100,
          "currency": "INR",
          "name": "Resofire",
          "description": "Booking single room",
          "image": "https://avatars.githubusercontent.com/u/127067084?v=4",
          "order_id": orderId,
          "handler": paymentHandler,
          "prefill": {
              "name": "Vaishnavi Hole",
              "email": "vaishnavihole1@gmail.com",
              "contact": "9588603013"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#ffc966"
          }
      };
    
      const rzp = new window.Razorpay(options);
      rzp.open();
    
      rzp.on('payment.failed', function (response){
        alert('Payment Failed')
        console.log(response);
    });
      }
    return (
        <div>
          <h1 className='text-center'>Book Rooms</h1>
    
          <div class="card product-card">
            <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Room Booking</h5>
              <p class="card-text">₹ 5000</p>
              <button type="button" onClick={()=>{initPayment(5000)}} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )
}

export default App

