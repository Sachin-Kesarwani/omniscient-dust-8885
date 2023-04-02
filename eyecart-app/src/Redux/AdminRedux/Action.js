import { allproducts, error, getalladmin, getdata, getuser, loading } from "./type";

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

        dispatch(getloading())
    return await axios.get(`${process.env.REACT_APP_url}/products/page/${active}`)
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
    return await axios.get(`${process.env.REACT_APP_url}/products`)
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
  return await  axios.get(`${process.env.REACT_APP_url}/admin/allusers`,{
      headers:{
        Authorization:token
      }
    }).then((res)=>{
        console.log(res)
        dispatch(getUsersdata(res.data.users))

    }).catch((err)=>{
        dispatch(geterror())
      console.log(err)
    })
  }





  export const postdataproductInApi=(data)=>async(dispatch)=>{
        dispatch(getloading())
        // let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklEIjoiNjQyNWJlNDllNDAxOGI5NjRiNDVjYjFhIiwibmFtZSI6IlNhY2hpbiBLZXNhcndhbmkiLCJpYXQiOjE2ODAxOTUyMDJ9.d-_wTiIKR72n0jhF0jzu6ThppTlH01x8O2f-1heDyD8"
        let token =localStorage.getItem("admintoken")
        console.log(token)
        console.log(data)
        console.log(process.env.REACT_APP_url)
        return await  axios({
        url :`${process.env.REACT_APP_url}/products/create`,
        method:"post",
         headers:{
              Authorization:token
            },
            
          data:data
        }).then((res)=>{
            dispatch(getAllproductEthPage(res.data))
          }).catch((er)=>{
            dispatch(geterror())
          })
  }



  function getadmin(data){
    return {
        type:getalladmin,
        payload:data
    }
  }

  export const GetallAdmins=()=>(dispatch)=>{
    let token =localStorage.getItem("admintoken")
       dispatch(getloading())
       axios({
        url :`${process.env.REACT_APP_url}/admin/alladmin`,
        method:"get",
         headers:{
              Authorization:token
            },
        }).then((res)=>{
            console.log(res.data)
         dispatch(getadmin(res.data.admins))
        }).catch((er)=>{
            dispatch(geterror())
        })
  }