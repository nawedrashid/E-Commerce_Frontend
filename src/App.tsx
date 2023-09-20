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
import Wishlist from './Pages/Wishlist';
import Orders from './Pages/Orders';
import Login from './Pages/Login';
import Registration from './Pages/Registration';

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
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
