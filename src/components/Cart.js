import React from 'react';


// پراپس میگیرد تابعی به نام  کارت که item پراپسی است که ارایه ها را دارد  از ایتم های سبد خرید 
//onremove تابعی هست که روی دکمه ی حذف کلیک کنیم  فراخوانی میشه
function Cart({ items, onRemove }) {

  // جمع مقدار ها و محاسبه ی قیمت
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (

    //سبد خرید و کادر ان را مشخص میکند
    // در خط 17 اگر تعداد جمله با صفر برابر میشد  نشان میدهد اون متن را ولی اگر  اینطور نبود لیست محصولات و ایدی و... رو نشون میده
    //خط 23  تابع مپ  برای نمایش هر کالا در یوای استفاده میکنیم و از ایتم برای تکرار هر کالا از سبد 
    <div style={styles.cartContainer}>
      <h2 style={styles.title}>🛒 سبد خرید</h2>
      {items.length === 0 ? (
        <p style={styles.emptyMessage}>سبد خرید شما خالی است.</p>
      ) : (
        ////////اطلاعات کالا را شمال میشود
        <>
          <ul style={styles.list}>
            {items.map(item => (
              <li key={item.id} style={styles.listItem}>
                <div style={styles.itemInfo}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <div>

                    <h4 style={styles.itemName}>{item.name}</h4>
                    <p style={styles.itemQuantity}>تعداد: {item.quantity}</p>
                  </div>
                </div>
                <div style={styles.itemActions}>
                  <span style={styles.itemPrice}>
                    {(item.price * item.quantity).toFixed(2)} دلار
                  </span>
                  <button
                    onClick={() => onRemove(item.id)}
                    style={styles.removeBtn}
                    title="حذف یک عدد"
                  >
                    _
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.total}>
            <strong>جمع کل:</strong> {total.toFixed(2)} دلار
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  cartContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    padding: 20,
    maxWidth: 400,
    margin: '40px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    marginBottom: 20,
    borderBottom: '2px solid #007bff',
    paddingBottom: 8,
    color: '#007bff',
    textAlign: 'center',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxHeight: 250,
    overflowY: 'auto',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
  },
  itemInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  itemImage: {
    width: 60,
    height: 60,
    objectFit: 'cover',
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  itemName: {
    margin: 0,
    fontSize: 16,
    color: '#333',
  },
  itemQuantity: {
    margin: '4px 0 0',
    fontSize: 14,
    color: '#666',
  },
  itemActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#007bff',
    minWidth: 70,
    textAlign: 'right',
  },
  removeBtn: {
    backgroundColor: '#dc3545',
    border: 'none',
    color: '#fff',
    borderRadius: '50%',
    width: 30,
    height: 30,
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: '8px',
    transition: 'background-color 0.3s ease',
  },
  total: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#222',
  },
};

export default Cart;
