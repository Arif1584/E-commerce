import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/Images/hero.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";


const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [])
  return (
    <div>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      {/* Main Container */}
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
        
        {/* Categories List */}
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-sm md:text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm md:text-sm font-medium">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image Section */}
        <div className="w-full md:w-9/12 h-80 md:h-96 relative">
          <img src={HeroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 text-center">
            <p className="text-sm md:text-lg">Arif | e-Shop</p>
            <h2 className="text-lg md:text-4xl font-bold">WELCOME TO e-SHOP</h2>
            <p className="text-xs md:text-base">MILLIONS+ PRODUCTS</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded text-sm md:text-base">SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div className="container mx-auto py-12">
       <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
       <div className="grid grid-cols-1 ms:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.slice(0, 5).map(((product) => (
        <ProductCard product={product} />
        )))}
       </div>
      
      </div>
      
    </div>
    <Shop />
    </div>
  );    
};

export default Home;
