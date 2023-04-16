import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../store/productSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getProductsFromAPI = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();
    setAllProducts(data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsFromAPI();

    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="">
        <h1 className=" xs:text-xl bg-[#FAE3B9] py-10  text-center text-[#8A2E38] font-sans font-semibold my-5">
          Carve your Shopping Needs!!
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
          {allProducts.length > 0
            ? allProducts.map((items) => (
                <div key={items.id} className="mx-auto">
                  <ProductCard
                    id={items.id}
                    imgURL={items.image}
                    name={items.title}
                    price={items.price}
                    rating={items.rating.rate}
                    count={items.rating.count}
                  ></ProductCard>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Products;
