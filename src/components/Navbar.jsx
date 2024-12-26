import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import { setSearchTerm } from "../redux/productSlice";


const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  const openSignUp = () => {
    setIsLogin(false)
    setIsModalOpen(true)
  }

  const openLogin = () => {
    setIsLogin(true)
    setIsModalOpen(true)
  }
  const products = useSelector(state => state.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>

        {/* Search bar */}
        <div className="relative flex-1 mx-4 hidden md:block">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
             onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        {/* Cart and user actions */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative flex items-center space-x-2">
            <FaShoppingCart className="text-xl" />
            <span className="hidden md:block">Cart</span>
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
             {products.length}
             </span>
            )}
          </Link>

          <div className="flex items-center">
            <button className="hidden md:block"
            onClick={() => setIsModelOpen(true)}>
              Login | Register
            </button>
            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>

          {/* Hamburger menu button for mobile */}
          <button className="block md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="relative flex-1 mx-4 md:hidden px-4 py-2">
        <form>
          <input
            type="text"
            placeholder="Search Product"
            className="w-full border py-2 px-4"
          />
          <FaSearch className="absolute top-3 right-7 text-red-500" />
        </form>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md py-4`}
      >
        <div className="flex flex-col items-center space-y-4 text-sm font-bold">
          <Link to="/" className="hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/shop" className="hover:underline" onClick={toggleMenu}>
            Shop
          </Link>
          <Link to="/contact" className="hover:underline" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/about" className="hover:underline" onClick={toggleMenu}>
            About
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin} />}
      </Modal>
    </nav>
  );
};

export default Navbar;
