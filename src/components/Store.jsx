import { useEffect, useState } from "react";
import { getProducts } from "../shopping.service";
import Item from "./Item";

function Store() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
       getProducts()
      .then((res) => 
        setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);
  return <>
  <div className="row container mx-auto">
  {products && 
 products.map((product,index)=>(
   
    <Item key={index}  id={index} category={product.category} desc={product.description} price={product.price} title={product.title} image={product.image}/>
  ))
  }
  </div>
  </>;
}

export default Store;
