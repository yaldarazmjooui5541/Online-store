import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    background: '#fff',
    color: '#333',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#007bff',
  },
  buttons: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  cartBtnWrapper: {
    position: 'relative',
  },
  cartBtn: {
    cursor: 'pointer',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#dc3545',
    color: '#fff',
    fontSize: 12,
    padding: '2px 6px',
    borderRadius: '50%',
    fontWeight: 'bold',
  },
};

function Navbar({ cartCount = 0 }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🛍️ فروشگاه من</div>
      <div style={styles.buttons}>
        <Link to="/" style={styles.btn}>خانه</Link>
        <Link to="/products" style={styles.btn}>محصولات</Link>
        <Link to="/login" style={styles.btn}>ورود</Link>
        <div style={styles.cartBtnWrapper}>
          <Link to="/checkout" style={{ ...styles.btn, ...styles.cartBtn }}>
            🛒
            {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
            </Link>
        </div>
      </div>
    </nav>
  )};


export default Navbar;