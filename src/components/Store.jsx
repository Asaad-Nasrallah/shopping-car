import { useEffect, useState } from "react";
import { getProducts } from "../services/shopping.service";
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
   
    <Item key={index}  {...product}/>
  ))
  }
  </div>
  </>;
}

export default Store;
