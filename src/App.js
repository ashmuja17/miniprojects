
import './App.css';
import Header from './components/header';
import Home from './page/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetail from './page/productdetails';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './page/cart';
import About from  './footer/about';
import Contact from './footer/contact';
import Privacy from './footer/privacy';





function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='op-center' />
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Home />}></Route>
            <Route path='/product/:id' element={<Productdetail cartItems={cartItems} setCartItems={setCartItems} />}></Route>
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/privacy' element={<Privacy/>}></Route>

          </Routes>
          <Footer />
        </div>
      </Router>



    </div>
  );
}

export default App;
