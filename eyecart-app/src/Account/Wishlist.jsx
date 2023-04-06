import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import WishlistCard from "./wishlistCart";
import { getwishdata } from "../Redux/Cart.reducer/cart.types";
import { getwishlistdata } from "../Redux/Cart.reducer/cart.action";

import axios from "axios"
const Wishlist = () => {
  let dispatch = useDispatch();






let [Wishlistdata,setWishlistdata]=useState([])

 const getwishlistdata=async()=>{
   
    return axios({
        url:`${process.env.REACT_APP_url}/wishlist`,
        method:"get",
        headers:{
            Authorization:localStorage.getItem("eyekartToken")
        }
    }).then((res)=>{
        console.log(res)
  setWishlistdata(res.data)
    }).catch((er)=>{

    })
}
  useEffect(() => {
   getwishlistdata()
  }, []);
console.log(Wishlistdata)
  return (
    <div style={{paddingTop:"220px"}}>
      {Wishlistdata?.length > 0 && (
        <Heading textAlign={"center"}>You Wish List</Heading>
      )}
      <Box m="auto" gap={"20px"} display={"flex"}  flexWrap={"wrap"}>
      {Wishlistdata?.length >= 1 ? (
        Wishlistdata?.map((e) => {
          return <WishlistCard key={e._id} item={e.productId} />;
        })
      ) : (
        <Heading textAlign={"center"}>Nothing In Wishlist </Heading>
      )}
      </Box>
     
    </div>
  );
};

export default Wishlist;
