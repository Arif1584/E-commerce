import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/Images/Empty Basket.png";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 ms:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-1/3 h-1/3 ml-96 py-9">
          <h1 className=" text-4xl flex justify-center">No Product Available</h1>
          <img src={NoProduct} alt="" />
        </div>
      )}
    </div>
  );
};
export default FilterData;
