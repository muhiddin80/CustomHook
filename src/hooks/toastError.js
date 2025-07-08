import { useEffect } from "react"
import toast from "react-hot-toast"

export const toastError = (message) =>{
    useEffect(()=>{
        if(message){
            toast.error(message)
        }
    },[error]);
}