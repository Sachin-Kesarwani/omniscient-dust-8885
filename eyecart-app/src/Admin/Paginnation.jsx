import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllproducts } from '../Redux/AdminRedux/Action'
import { pageChange } from '../Redux/AdminRedux/type'

const Pagination = () => {
    let activepage=useSelector((store)=>store?.adminReducer?.activepage)
    let totalpage=useSelector((store)=>store?.adminReducer.totalPage)
    let data=useSelector((store)=>console.log(store))
    let [active,setactive]=useState(activepage)
    let dispatch=useDispatch()
    useEffect(()=>{
         dispatch({type:pageChange,payload:active})
         dispatch(GetAllproducts(active))
    },[active])
    console.log(active,totalpage)
  return (
    <div>
       
      <Button m={2} bg={"cyan.300"} isDisabled={active==1} onClick={()=>setactive(active-1)}>Pre</Button>
      <Button  m={2} bg={"cyan.300"} ><b>{active}</b></Button>
      <Button  m={2} bg={"cyan.300"} isDisabled={active==totalpage} onClick={()=>setactive(active+1)}>Next</Button>
    </div>
  )
}

export default Pagination
