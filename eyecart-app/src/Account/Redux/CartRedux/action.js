import axios from "axios";
import {
  AddInCart,
  AddInWishList,
  Loading,
  Error,
  GetCart,
  DelfromWishlist,
  GetwishlistData,
  GetorderData,
} from "./actiontype";

let accountdata = JSON.parse(localStorage.getItem("accountdata")) || { id: 17 };
// console.log(accountdata.id,"inredux")

export function GetCartData(dispatch) {
  dispatch({ type: Loading });
  axios
    .get(`https://shiny-gray-gear.cyclic.app/carts`,{headers: {
      Authorization : `${localStorage.getItem("eyekartToken")}`
      }})
    .then((res) => {
      console.log(res)
      dispatch({ type: GetCart, payload: res.data });
    }).catch((err)=>{
      dispatch({ type:Error });

    })
}

export const PostdataIncart = (data) => async (dispatch) => {
  console.log(data, "reached at redux");
  dispatch({ type: Loading });

  return await axios({
    url: `https://shiny-gray-gear.cyclic.app/carts/add`,
    method: "patch",
    data: {
      cart: data,
    },
  });
  // .then((res) => {
  //   dispatch({ type: AddInCart, payload: res.data });
  // })
  // .catch((er) => {
  //   dispatch({ type: Error });
  // });
};

export const PostdataInWishList = (data) => async (dispatch) => {
  dispatch({ type: Loading });
  console.log(data, "wish in redux");
  return await axios({
    url: `https://shiny-gray-gear.cyclic.app/carts/${accountdata.id}`,
    method: "patch",
    data: {
      wishlist: data,
    },
  });
};

export const DeldatafromWishlist = (id) => async (dispatch) => {
  console.log("dellllll", id);
  dispatch({ type: Loading });
  await axios({
    url: `https://shiny-gray-gear.cyclic.app/wishlist/${id}`,
    method: "delete",
  })
    .then((res) => {
      dispatch({ type: DelfromWishlist, payload: id });
      dispatch(GetwishListdatafromjson);
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};

export const GetwishListdatafromjson = (dispatch) => {
  dispatch({ type: Loading });
  axios(`https://shiny-gray-gear.cyclic.app/wishlist`)
    .then((res) => {
      dispatch({ type: GetwishlistData, payload: res.data});
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};

export const PostdataInOrder = (data) => async (dispatch) => {
  dispatch({ type: Loading });
  console.log(data, "wish in redux");
  return await axios({
    url: `https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`,
    method: "patch",
    data: {
      order: data,
    },
  });
};

export const GetOrderdatafromjson = (dispatch) => {
  dispatch({ type: Loading });
  axios(`https://shiny-gray-gear.cyclic.app/orders`)
    .then((res) => {
      dispatch({ type: GetorderData, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};
