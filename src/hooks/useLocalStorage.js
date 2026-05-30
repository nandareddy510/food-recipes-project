import { useEffect, useState } from "react"

export const useLocalStorage = (key,inital) =>{
    let [value,setValue] = useState(()=>{
        const item = localStorage.getItem(key);
       if (item){
        return JSON.parse(item)
       }
       return inital
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value,setValue]
}