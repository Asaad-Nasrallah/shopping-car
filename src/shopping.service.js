import axios from "axios"
export async function getProducts()
{
    try{
        return await axios.get("https://fakestoreapi.com/products")
    }catch(e){
        console.log(e)
    }
}