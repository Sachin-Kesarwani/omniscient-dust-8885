import { error, getdata, loading } from "./type";

import axios from "axios"
function getloading(){
    return {
        type:loading
    }
}

function getalldata(data){
    return{
        type:getdata,
        payload:data
    }
}
function geterror(){
    return {
        type:error
    }
}

export const GetAlldata=(dispatch)=>{
    console.log(dispatch)
        dispatch(getloading())
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            dispatch(getalldata(res.data))
           
        }).catch((er)=>{
            dispatch(geterror())
        })
}