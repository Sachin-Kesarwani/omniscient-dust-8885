import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { GetCart } from './Redux/CartRedux/actiontype';
import { GetCartData } from './Redux/CartRedux/action';
import { Loading } from '../frontend/Components/Loading';

const Cartfun = () => {
    let dispatch = useDispatch();
const [data,setdata]=useState([])
    let {order,isLoading,isError} = useSelector((store) => store?.CartReducer);
  const store=useSelector((store)=>store)
    useEffect(() => {
       async function myfun(){

            let data=await dispatch(GetCartData)
            setdata(order)
        }
      myfun()
    }, []);

    return isLoading?<Loading />:isError?<div>Error</div>:(
        <div>

        {data.map((el)=>{
            return <div>
                hello
            </div>
        })}


    </div>
  )
}

export default Cartfun