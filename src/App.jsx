import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";


function App() {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>home</Route>
        <Route path="/shop" element={<Shop />}>home</Route>
        <Route path="/cart" element={<Cart />}>cart</Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}>cart</Route>
        <Route path="/order-confirmation" element={<Order order={order}/>}>cart</Route>
        <Route path="/filter-data" element={<FilterData/>}>cart</Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
