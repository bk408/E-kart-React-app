import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';


import { Routes, Route, } from "react-router-dom";
import Products from './components/Products';



function App() {
  return (
    <>
<NavBar />
    
 <Routes>

 <Route exact path="/products" key="products" element={<Products />} />
 <Route exact path="/" key="home"  element={<Home />} />
 </Routes>
     <Home/>

 
    </>





 

  );
}

export default App;