import axios from "axios";
export async function getProducts() {
  try {
    return await axios.get("https://fakestoreapi.com/products");
  } catch (e) {
    console.log(e);
  }
}

export async function getProduct(id) {
  try {
    return await axios.get(`https://fakestoreapi.com/products/${id}`);
  } catch (e) {
    console.log(e);
  }
}
