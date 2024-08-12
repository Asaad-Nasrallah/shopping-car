import { useEffect, useState } from "react";
import { getProducts } from "../services/shopping.service";
import Item from "./Item";
import CategorisNav from "./CategoriesNav";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className="d-flex ">
        <CategorisNav />
        <div style={{ width: "86%" }} className="border" >
        <div className="row container mx-auto mt-4">
        {products &&
          products.map((product, index) => <Item key={index} {...product} />)}
      </div>
        </div>
      </div>
    </>
  );
}

export default Home;
