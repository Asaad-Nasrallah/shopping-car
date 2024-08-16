/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../services/shopping.service";
import CategorisNav from "./CategoriesNav";
import Item from "./Item";
function CategoriesProducts() {
  const [products, setProducts] = useState([]);
  const { category, price } = useParams();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  //search use effect
  useEffect(() => {
    getProducts()
      .then((res) => {
        const filteredProducts = res.data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        return filteredProducts;
      })
      .then((filteredProducts) => {
        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);
  //category use effect
  useEffect(() => {
    inputRef.current.focus();
    console.log(typeof price);

    if (category !== "all") {
      getProductsByCategory(category)
        .then((res) => {
          const filteredProducts = res.data.filter(
            (product) => product.price < price
          );
          return filteredProducts;
        })
        .then((filteredProducts) => {
          setProducts(filteredProducts);
        })
        .catch((e) => console.log(e));
    } else {
      getProducts()
        .then((res) => {
          const filteredProducts = res.data.filter(
            (product) => product.price < price
          );
          return filteredProducts;
        })
        .then((filteredProducts) => {
          setProducts(filteredProducts);
        })
        .catch((e) => console.log(e));
    }
  }, [category,price]);
  return (
    <>
      <div className="d-flex ">
        <CategorisNav />
        <div style={{ width: "86%" }} className="border">
          <div className="d-flex justify-content-center my-3 gap-2">
            <input
              className="form-control mr-sm-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="row container mx-auto mt-4">
            {products &&
              products.map((product, index) => (
                <Item key={index} {...product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesProducts;
