import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Login from './components/login';
import SabtnamForm from './components/SabtnamForm';
import AllProductsPage from './components/AllProductsPage';
import PaymentPage from './components/PaymentPage'; // ✅ همین باید بالای همه باشه
import './styles.css'; // ✅ تمام importها قبل از هر کدی



function App() {
  const productsData = [
    { id: 1, name: 'کفش ورزشی آبی', price: 120000, category: 'ورزشی', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format' },
    { id: 2, name: 'کفش رسمی مشکی', price: 180000, category: 'رسمی', image: 'https://imgurl.com/formal-black.jpg' },
    { id: 3, name: 'کفش سفید راحتی', price: 95000, category: 'روزمره', image: 'https://imgurl.com/white-comfy.jpg' },
    { id: 4, name: 'کفش تابستانی زنانه', price: 110000, category: 'تابستانی', image: 'https://imgurl.com/summer-women.jpg' },
    { id: 5, name: 'کفش اسپرت قرمز', price: 140000, category: 'ورزشی', image: 'https://imgurl.com/red-sport.jpg' },
    { id: 6, name: 'کفش بچه‌گانه', price: 90000, category: 'بچه‌گانه', image: 'https://imgurl.com/kids1.jpg' },
    { id: 7, name: 'کفش مردانه چرمی', price: 160000, category: 'رسمی', image: 'https://imgurl.com/leather-men.jpg' },
    { id: 8, name: 'کفش راحتی زنانه', price: 105000, category: 'روزمره', image: 'https://imgurl.com/women-soft.jpg' },
    { id: 9, name: 'کفش پیاده‌روی طبی', price: 135000, category: 'ورزشی', image: 'https://imgurl.com/ortho.jpg' },
    { id: 10, name: 'کفش اسپرت پسرانه', price: 85000, category: 'بچه‌گانه', image: 'https://imgurl.com/boys.jpg' },
    { id: 11, name: 'کفش دخترانه صورتی', price: 92000, category: 'بچه‌گانه', image: 'https://imgurl.com/girls-pink.jpg' },
    { id: 12, name: 'کفش تابستانی مردانه', price: 115000, category: 'تابستانی', image: 'https://imgurl.com/men-summer.jpg' },
  ];
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = product => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = productId => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        {/* مسیر همه محصولات */}
        <Route
          path="/products"
          element={
            <AllProductsPage
              products={productsData}
              onAddToCart={handleAddToCart}
            />
          }
        />
  
        {/* مسیر ورود */}
        <Route path="/login" element={<Login />} />
  
        {/* مسیر ثبت‌نام */}
        <Route path="/register" element={<SabtnamForm />} />
  
        {/* صفحه اصلی */}
        <Route
          path="/"
          element={
            <div style={{ maxWidth: 1200, margin: 'auto', padding: 20 }}>
              <h1 style={{ textAlign: 'center' }}>فروشگاه آنلاین</h1>
  
              {/* 🔍 سرچ بار فعال بمونه */}
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  
              {/* فقط ۶ محصول اول بعد از فیلتر */}
              <ProductList
                products={filteredProducts.slice(0, 5)}
                onAddToCart={handleAddToCart}
              />
  
              {/* سبد خرید */}
              <Cart items={cartItems} onRemove={handleRemoveFromCart} />
            </div>
          }
        />
  
        {/* مسیر صفحه پرداخت */}
        <Route path="/checkout" element={<PaymentPage cartItems={cartItems} />} />
      </Routes>
    </>
  );
}
  export default App;