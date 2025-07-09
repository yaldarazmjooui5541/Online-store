import React from 'react';
import ProductItem from './ProductItem';

// مثلا نشان می دهد که اگر در جستجو چیزی پیدانشد برای کابر این در وسط صفحه نشان داده بشه 
function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center' }}>هیچ محصولی پیدا نشد.</p>;
  }

  return (
    <div style={styles.grid}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
// خط 20 در اینجا برای  چیدمان محصولات استفاده میشه
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
};

export default ProductList;
