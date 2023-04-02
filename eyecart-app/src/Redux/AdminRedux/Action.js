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

export const GetAllproducts=(active=1)=>async(dispatch)=>{
    console.log(dispatch)
    console.log(process.env.REACT_APP_url)
        dispatch(getloading())
    return await axios.get(`https://shiny-gray-gear.cyclic.app/products/page/${active}`)
        .then((res)=>{
            console.log(res.data)
            dispatch(getalldata(res.data))
          
        }).catch((er)=>{
            dispatch(geterror())
        })
}