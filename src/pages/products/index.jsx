import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";
import Product from "../product";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../hooks/toastError";

function debounce(func,delay){
  let timeoutId;

  return function(...args){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
      func.apply(this,args);
    },delay)
  }
}
function Products () {
    const navigate = useNavigate()
    const [query,setQuery] = useState('')
    const {data=[],isLoading,error} = useFetch({
    url:'https://fakestoreapi.com/products/'
    })
    
    toastError(error)

    const filterProducts = data.filter(post =>post.title.toLocaleLowerCase().includes(query))

    const handleSearch=debounce((e)=>{
        setQuery(e.target.value.toLocaleLowerCase())
    },500)

    return ( 
    <div className="flex flex-wrap gap-12 justify-center text-center">
        <h1 className="text-5xl">Products</h1>
        <input
        className="w-[90%] mx-auto mt-5 border-gray-400 border p-1" 
        type="search"
        placeholder="search"
        onInput={handleSearch}   />
        {isLoading?<p>Loading...</p> : filterProducts.map(p=>{
        return (<div onClick={()=>navigate(`product/${p.id}`)} className="w-[200px] h-[330px] shadow-2xl rounded-2xl cursor-pointer" key={p.id}>
            <img className="w-[200px] h-[200px] object-contain" src={p.image} alt={p.title} />
            <p className="mx-2">{p.title.slice(0,50)}{p.title.length > 50 ? '...' : ''}</p>
            <p className="mx-2">{p.price}$</p>
        </div>)
        })}
    </ div>
    )
}

export default Products
