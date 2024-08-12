/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../services/shopping.service";
import CategorisNav from "./CategoriesNav";
import Item from "./Item";
function CategoriesProducts() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    if (category !== "all") {
      getProductsByCategory(category)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((e) => console.log(e));
    } else {
      getProducts()
        .then((res) => setProducts(res.data))
        .catch((e) => console.log(e));
    }
  }, [products]);
  return (
    <>
      <div className="d-flex ">
        <CategorisNav />
        <div style={{ width: "86%" }} className="border">
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
