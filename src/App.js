import './App.css';
import "react-toastify/dist/ReactToastify.css";

import NavBar from './components/NavBar';
import Home from './components/Home';
import { Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Products from './components/Products';
import Product from './components/Product';
import Cart from  './components/Cart';
import About from './components/About';






function App() {
  return (
    <>
    <ToastContainer />
<NavBar />
    
 <Routes>

 <Route exact path="/" key="home"  element={<Home />} />
 <Route exact path="/products" key="products" element={<Products />} />
 <Route exact path="/products/:id" key="products/:id" element={<Product />} />
 <Route exact path="/cart" key="cart" element={<Cart />} />
 <Route exact path="/about" key="about" element={<About />} />
 
 </Routes>
    </>
     

 





 

  );
}

export default App;