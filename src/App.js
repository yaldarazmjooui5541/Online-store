import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Login from './components/login';
import SabtnamForm from './components/SabtnamForm';
import AllProductsPage from './components/AllProductsPage';
import PaymentPage from './components/PaymentPage';
import './styles.css';



function App() {
  const productsData = [
    { id: 1, name: 'کفش ورزشی آبی', price: 120000, category: 'ورزشی', image: 'https://tse2.mm.bing.net/th/id/OIP.1FP32Qymhq4jIEKWY6qj4wHaIV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 2, name: 'کفش رسمی مشکی', price: 180000, category: 'رسمی', image: 'https://th.bing.com/th/id/OIP.jifDeBvetHpH5juaD3hO2wHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, name: 'کفش سفید راحتی', price: 95000, category: 'روزمره', image: 'https://tse3.mm.bing.net/th/id/OIP.k0vfw5DDXUB4Zll6gFiNEQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 4, name: 'کفش تابستانی زنانه', price: 110000, category: 'تابستانی', image: 'https://tse1.mm.bing.net/th/id/OIP.GmiMNdigJdO7XZFcOtrnYAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 5, name: 'کفش اسپرت قرمز', price: 140000, category: 'ورزشی', image: 'https://harfetaze.com/wp-content/uploads/2022/12/kafsh-1401-02.jpg' },
    { id: 6, name: 'کفش بچه‌گانه', price: 90000, category: 'بچه‌گانه', image: 'https://tse4.mm.bing.net/th/id/OIP.q3rmgnR62J4mAsZORnTJ2wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 7, name: 'کفش مردانه چرمی', price: 160000, category: 'رسمی', image: 'https://tse2.mm.bing.net/th/id/OIP.sADk5SP8VT4Sso39dC1n8gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 8, name: 'کفش راحتی زنانه', price: 105000, category: 'روزمره', image: 'https://tse2.mm.bing.net/th/id/OIP.u4kVkNFdkX25-uFuE06jKAHaGL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 9, name: 'کفش پیاده‌روی طبی', price: 135000, category: 'ورزشی', image: 'https://tse1.mm.bing.net/th/id/OIP.B6XwwwhcHBfVyzdBZ5oeagHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 10, name: 'کفش اسپرت پسرانه', price: 85000, category: 'بچه‌گانه', image: 'https://cdn.tukanim.com/wp-content/uploads/2024/03/new-boys-sports-shoes-1-768x768.jpg' },
    { id: 11, name: 'کفش دخترانه صورتی', price: 92000, category: 'بچه‌گانه', image: "https://tse2.mm.bing.net/th/id/OIP.ZHCMqeiAYK_o32K-lDpfKAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 12, name: 'کفش تابستانی مردانه', price: 115000, category: 'تابستانی', image: 'https://harfetaze.com/wp-content/uploads/2022/04/models-summershoes-2.jpg' },
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

        {/* مسیر ثبت‌ نامخ*/}
        <Route path="/register" element={<SabtnamForm />} />

        {/* صفحه اصلی */}
        <Route
          path="/"
          element={
            <div style={{ maxWidth: 1200, margin: 'auto', padding: 20 }}>
              <h1 style={{ textAlign: 'center' }}>فروشگاه آنلاین</h1>

              {/* سرچ بار فعال بمونه */}
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