import react from 'react';
import logo from './logo.svg';
import './App.css';

function loadScript(src) {
  return new Promise(resolve => {

    const script = document.createElement('script');
    script.src = 
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
  })

}
     const __DEV__ = document.domain === 'localhost'

  if(document.domain === 'localhost'){
    // development
  } else {
    // production
  }

function App() {
  async function displayRazorpay() {

    const res = await loadScript('https://wwww.checkout.razorpay.com/v1/checkout.js')

    if(!res) {
      alert('Razorpay SDK failes to load. Are you Online?')
      return
    }
      
    const options = {
      key: __DEV__ ? 'rzp_test_Hx1u2oka1Tudh0' : 'PRODUCTION_KEY',
      amount: '5000', 
      currency: 'USD',
      name:'Donation',
      
      image: "https://example.com/your_logo",
      order_id: 'order_9A33Wu170gUtm',

      handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},

      prefill: {
				name: 'AW',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate $5
        </a>
      </header>
    </div>
  );
}

export default App;
