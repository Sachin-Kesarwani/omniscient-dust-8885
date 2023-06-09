import React, { useContext } from "react";
import styled from "styled-components";
// import ProductFilter from "./../../Components/ProductsPage/ProductFilter";
// import Productlist from "../../Components/ProductsPage/ProductList.js";
//import { CartContext } from "../../ContextApi/CartContext";

import "./Products.module.css";
import NewProduct from "../NewProduct/ProductList";
const Products = () => {
//   let singleProduct = useContext(CartContext);
//   console.log(singleProduct);
  return (
    <div>
      {/* <Navbar /> */}
      <Wrapper>
        {/* <ProductFilter /> */}
        {/* <Productlist /> */}
        <NewProduct />
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid black; */
  padding: 0rem 3rem;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    padding: 0rem 1rem;
  }
`;
export default Products;