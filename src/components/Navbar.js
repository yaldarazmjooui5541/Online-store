import React from 'react';

//پراپ با مقدار پیش فرض  صفر تعریف میشه و برای نمایش تعداد کالاها
//کل محتوا در nav قرار میگیره 
//تعریف دکمه های ناوبار و لوگوی فروشگاه در نوار 
//در خط 19 اگر تعداد بزرگتر صفر باشه پس یه اسپن با استایل تعریف شده نمایش می دهد و اگر سبد خالی بشه این عدد نمایش پیدا نکنه
function Navbar({ cartCount = 0 }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🛍️ فروشگاه من</div>
      <div style={styles.buttons}>
        <button style={styles.btn}>خانه</button>
        <button style={styles.btn}>محصولات</button>
        <button style={styles.btn}>ورود</button>
        <div style={styles.cartBtnWrapper}>
          <button style={{ ...styles.btn, ...styles.cartBtn }}>
            🛒
            {cartCount > 0 && (
              <span style={styles.badge}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

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
    transition: 'background 0.3s ease',
    position: 'relative',
  },
  cartBtnWrapper: {
    position: 'relative',
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

export default Navbar;
