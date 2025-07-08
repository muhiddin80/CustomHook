import toast from "react-hot-toast"
import { useFetch } from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
import { toastError } from "../../hooks/toastError"

export default function Product(){
    const {id} = useParams()
    const {data=[],isLoading,error} = useFetch({
      url:`https://fakestoreapi.com/products/${id}`
    })

    toastError(error)

    return ( 
        <div>
            {isLoading? <p>Loading...</p> :
                <div key={data.id} className="flex justify-center flex-col p-30 text-center items-center">
                    <p className="text-4xl mb-10">{data.title}</p>
                    <img className="w-[400px] h-[400px] mb-7 object-contain" src={data.image} alt="" />
                    <p>{data.description}</p>
                </div>
            }
        </div>
    )
}