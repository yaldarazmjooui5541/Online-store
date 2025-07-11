import React from 'react';
import './PaymentPage.css';

function PaymentPage({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("در حال انتقال به درگاه پرداخت...");
    // اینجا در حالت واقعی باید به درگاه بانکی هدایت بشه
  };

  return (
    <div className="payment-container">
      <h2>تأیید نهایی و پرداخت</h2>

      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          <ul className="payment-list">
            {cartItems.map(item => (
              <li key={item.id} className="payment-item">
                <img src={item.image} alt={item.name} /> 
              <hr></hr>
                <div>
                  <h4>{item.name}</h4>
                  <p>تعداد: {item.quantity}</p>
                  <p>قیمت: {(item.price * item.quantity).toLocaleString()} تومان</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>مبلغ قابل پرداخت: {totalPrice.toLocaleString()} تومان</h3>
          <button className="payment-btn" onClick={handlePayment}>
            پرداخت
          </button>
        </>
      )}
    </div>
  );
}

export default PaymentPage;
