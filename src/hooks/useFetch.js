import { useState } from "react"
import { useEffect } from "react"

export const useFetch = (params) =>{
    const [data,setData] = useState()
    const [isLoading,setLoading] = useState(true)
    const [error,setError] = useState('')
    useEffect(()=>{
        const fetchUrl = () =>{
            try {
                fetch(params.url)
                .then(res => res.json())
                .then(json =>{
                    setData(json)
                }).finally(()=>{
                    setLoading(false)
                })
            } catch (error) {
                setLoading(false)
                setError(error.message||'Something went wrong!')
            }
                
        }

        fetchUrl()
        },[])
        return {data,isLoading,error}
}