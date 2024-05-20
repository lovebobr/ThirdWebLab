import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { CartProvider } from './components/CartContext';
function App() {
  return (
    <>
    <CartProvider>
    
      <div className="wrapper">
        <Header />
      </div>
      
    </CartProvider>
    <Footer />
    </>
  );
}
export default App;
