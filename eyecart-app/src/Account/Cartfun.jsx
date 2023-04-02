import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { GetCart } from './Redux/CartRedux/actiontype';
import { GetCartData } from './Redux/CartRedux/action';
import { Loading } from '../frontend/Components/Loading';

    const Cartfun = () => {
    let dispatch = useDispatch();
   const [data,setdata]=useState([])
    let {cart,isLoading,isError} = useSelector((store) => store?.CartReducer);
    const store=useSelector((store)=>store)

    useEffect(() => {
       async function myfun(){

            let data=await dispatch(GetCartData)
            setdata(cart)
        }
      myfun()
    }, []);

    return isLoading?<Loading />:isError?<div>Error</div>:(
        <div>

        {data.length>0?data.map((el)=>{
            return <div>
              
            </div>
        }):<div style={{color:'black',display:"block",margin:"auto"}}>
            <img height={"300px"} width={"50%"} src="https://www.clickbazar.com/Images/empty-cart.gif" alt="" /></div>}


    </div>
  )
}

export default Cartfun