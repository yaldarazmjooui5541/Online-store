import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css';
import Navbar from './components/Navbar';



function App() {
  // نمونه داده محصولات
  const productsData = [
    {
      id: 1,
      name: 'کفش ورزشی آبی',
      price: 100,
      image: 'https://tse3.mm.bing.net/th/id/OIP.BojikNb2Cmf3ZWRubigrMwHaHa?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 2,
      name: 'کفش چرمی مشکی',
      price: 150,
      image: 'https://tse1.mm.bing.net/th/id/OIP.t8uQtVrRFypZy2sjVE8GpgHaHa?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 3,
      name: 'کفش راحتی سفید',
      price: 90,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      name:" کفش چرم",
      price : 85,
      image: 'https://bing.com/th/id/OIP.y8HI_TTLHOde0q62ROAt1AHaEl?w=281&h=180&c=7&r=0&o=7&cb=thvnextc2&dpr=1.3&pid=1.7&rm=3'
    },
    {
      id: 5,
      name: "کفش مجلسی",
      price : 110,
      image : 'https://img.veaul.com/catalog/product/4/_/4_5491/simg/elegant-ivory-wedding-shoes-2020-rhinestone-lace-flower-bow-9-cm-stiletto-heels-pointed-toe-wedding-sandals.jpg@600w.jpg'
    }
    
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  // فیلتر محصولات براساس جستجو
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // افزودن محصول به سبد خرید
  const handleAddToCart = product => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        // اگر محصول هست، تعدادشو افزایش بده
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // اگر محصول نیست، اضافه کن با مقدار 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // حذف محصول از سبد خرید
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

    <div style={{ maxWidth: 1200, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
       <Navbar cartCount={cartItems.length} />
    {/* بقیه کامپوننت‌ها */}
  
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>  فروشگاه انلاین </h1>
      
      {/* کامپوننت جستجو */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {/* نمایش محصولات فیلتر شده */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      
      {/* سبد خرید */}
      <Cart items={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
}

export default App;
