import React, { useState } from 'react';

function ProductItem({ product, onAddToCart }) {
  //مشخص میکنه وضعیت کارت فعاله یا نه . اگر قعال بود یا نبود افکت اجرا بشه یعنی همونن بزرگ یا کوچیک شدنش
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prev => !prev);
  };
  //    و  خط 16 اجازه فوکوس رو بهمون میده و ااینکه خط 15 که به صفحه خوان ها میگه این صفحه قابلیت کلیک شدن رو دارهonKeyDown: برای فعال شدن با کلید Enter دسترس‌پذیری
  return (
    <div
      onClick={handleClick}
      className={`product-card ${isActive ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter') handleClick();
      }}
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        boxShadow: isActive ? '0 8px 20px rgba(0,0,0,0.3)' : '0 4px 10px rgba(0,0,0,0.1)',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
      />
      <h3 style={{ margin: '10px 0 5px', fontSize: '18px', color: '#333' }}>{product.name}</h3>
      <p style={{ margin: '0 0 15px', fontWeight: 'bold', color: '#007bff' }}>{product.price} دلار</p>
      <button
        onClick={e => {
          e.stopPropagation();
          onAddToCart(product);
        }}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={e => (e.target.style.backgroundColor = '#007bff')}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductItem;
