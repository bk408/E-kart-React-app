import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';


import { Routes, Route, } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from  './components/Cart';




function App() {
  return (
    <>
<NavBar />
    
 <Routes>

 <Route exact path="/" key="home"  element={<Home />} />
 <Route exact path="/products" key="products" element={<Products />} />
 <Route exact path="/products/:id" key="products/:id" element={<Product />} />
 <Route exact path="/cart" key="cart" element={<Cart />} />
 </Routes>
    </>
     

 





 

  );
}

export default App;