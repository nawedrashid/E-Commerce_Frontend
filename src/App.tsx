import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router';
import Products from './Pages/Products';
import Category from './Pages/Category';
import UserProfile from './Pages/UserProfile';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productDetails' element={<ProductDetails />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
