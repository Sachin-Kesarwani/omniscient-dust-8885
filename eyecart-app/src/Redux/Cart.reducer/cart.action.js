import axios from "axios"
import { getwishdata, loading } from "./cart.types"





export const getwishlistdata=()=>async(dispatch)=>{
    dispatch({type:loading})
    return axios({
        url:`${process.env.REACT_APP_url}/wishlist`,
        method:"get",
        headers:{
            Authorization:localStorage.getItem("eyekartToken")
        }
    }).then((res)=>{
        console.log(res)
   dispatch({type:getwishdata,payload:res.data})
    }).catch((er)=>{

    })
}