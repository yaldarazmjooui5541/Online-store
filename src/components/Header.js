import React from 'react';

function Header({ cartCount }) {
  return (
    <header>
      <h1>React Store</h1>
      <div>🛒 Cart Items: {cartCount}</div>
    </header>
  );
}

export default Header;
