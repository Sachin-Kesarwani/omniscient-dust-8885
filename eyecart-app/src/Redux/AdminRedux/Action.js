import { allproducts, error, getdata, getuser, loading } from "./type";

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


function getAllproductEthPage(data){
return {
    payload:data,
    type:allproducts
}
}

export const GetAllproductswithoutPage=()=>async(dispatch)=>{
    console.log(dispatch)
    console.log(process.env.REACT_APP_url)
        dispatch(getloading())
    return await axios.get(`https://shiny-gray-gear.cyclic.app/products`)
        .then((res)=>{
            console.log(res.data)
            dispatch(getAllproductEthPage(res.data))
          
        }).catch((er)=>{
            dispatch(geterror())
        })
}

function getUsersdata(data){
    return {
        type:getuser,
        payload:data
    }
}

export  const getAllusers=()=>async(dispatch)=>{
  
    dispatch(getloading())
  let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklEIjoiNjQyNWJlNDllNDAxOGI5NjRiNDVjYjFhIiwibmFtZSI6IlNhY2hpbiBLZXNhcndhbmkiLCJpYXQiOjE2ODAxOTUyMDJ9.d-_wTiIKR72n0jhF0jzu6ThppTlH01x8O2f-1heDyD8"
    axios.get("https://shiny-gray-gear.cyclic.app/admin/allusers",{
      headers:{
        Authorization:token
      }
    }).then((res)=>{
        console.log(res)
        dispatch(getUsersdata(res.data.users))

    }).catch((err)=>{
        dispatch(error())
      console.log(err)
    })
  }