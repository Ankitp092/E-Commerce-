import { useEffect, useState } from "react";
import { AddItem } from "./CartSlice";
import { useDispatch } from "react-redux";

export default function Home()
{
const dispetch = useDispatch();

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=100")
        .then(response=>response.json())
        .then(result=>setProducts(result.products))
       },[]);
  
       
 
    return<>
    <h1 className="alert-primary">Product List</h1>
    <hr/>
    
    <div className="row mt-3">
        {products.map(ob=>
            <div className="col-xl-3 col-lg-3 col-md-2 text-center mt-3">
            <img src={ob.images[0]} height={200} width={250}/><br/>
            <b>{ob.title} (Rating : {ob.rating})</b><br/>
            <b>Price {ob.price}</b><br/><br/>
            <button onClick={()=>dispetch(AddItem(ob))} className="btn-sm btn-success">Add To Cart</button>
           </div>
)}
         </div>
         
    </>
}