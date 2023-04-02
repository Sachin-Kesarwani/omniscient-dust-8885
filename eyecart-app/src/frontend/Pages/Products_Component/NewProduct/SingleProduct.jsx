import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

// let x = localStorage.getItem("eyeKartToken")


import { useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
  Flex,
  useToast
} from "@chakra-ui/react";

const SingleProduct = () => {
  const toast = useToast()
  const { id } = useParams();
  let token =(localStorage.getItem("eyekartToken"))
   let user = JSON.parse(localStorage.getItem("eyekartUser"))
  console.log(token)
  const [data, setData] = useState({});
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state.CartReducer);

  const handleAddToCart = async () => {
    try {
      let d=await fetch(`https://shiny-gray-gear.cyclic.app/carts/add`,{
        method:"POST",
        body:JSON.stringify({
          user:user,
          productId:id,
          qty:1
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization':token
      }
      })
      let r=await d.json()
      toast({
        title:"Added to the wishlist",
        status:"success",
        duration:5000,
        isClosable:true,
        description:"Thankyou",
        position:"top"
      })
     
    } catch (error) {
      console.log(error)
      
    }
  };
  
  const handleAddToWishlist = async () => {
    toast({
      title:"Added to the wishlist",
      status:"success",
      duration:5000,
      isClosable:true,
      description:"Thankyou",
      position:"top"
    })
    // try {
    //   let d=await fetch(`https://shiny-gray-gear.cyclic.app/wishlist`,{
    //     method:"POST",
    //     body:JSON.stringify({
    //       user:"xx",
    //       productId:id,
    //       qty:1
    //     }),
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization':token
    //   }
    //   })
    //   let r=await d.json()
    //   console.log(r)
    // } catch (error) {
    //   console.log(error)
    // }
  };

  const fetchSingleProduct = () => {
    axios(`https://shiny-gray-gear.cyclic.app/products/${id}`)
      .then((res) => {setData(res.data[0])
       
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <>
      
      <Grid
        m={5}
        gap={5}
        justifyContent="space-around"
        templateColumns="repeat(3, 1fr)"
      >
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src={data.image} />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src={data.image} /> 
        </GridItem>
        <GridItem position="relative" p={5} colSpan={1} rowSpan={10}>
          <Text color="gray.500">{data.title}</Text>
          <Text
            my="10px"
            fontWeight={"bold"}
            w="80%"
            fontSize="18px"
            textTransform="capitalize"
          >
            {data.productRefLink}
          </Text>
          <Text my="10px" fontWeight="400" color="gray.400" fontSize="18px">
            Size : Medium
          </Text>
          <Text my="10px" fontWeight="500" fontSize="x-large" color="teal.500">
            ₹{data.price}{" "}
            <span
              style={{
                fontSize: "18px",
                fontWeight: "lighter",
                color: "#727297",
                textDecoration: "line-through",
                marginRight: "2%"
              }}
            >
              {"  "}₹{data.price}{" "}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                color: "black"
              }}
            >
              {"  "}(₹{+data.price - +data.price} with GST)
            </span>
          </Text>
          <Text mt="-4">Frame + Lens</Text>
          <br />

          <Button
            p={7}
            m="10px 20px"
            w="90%"
            color="white"
            bgColor="#00bac6"
           onClick={handleAddToCart}
          >
            <Flex flexWrap="wrap" justifyContent="center">
              <Text textAlign="center">BUY 1 GET 1 WITH GOLD MEMBERSHIP</Text>

              <Text fontSize="12px">
                (with 1 Year Warranty & 14 day Return)
              </Text>
            </Flex>
          </Button>
          <Button
            p={7}
            m="10px 20px"
            w="90%"
            color="white"
            bgColor="#00bac6"
            onClick={handleAddToWishlist}
            fontSize="18px"
          >
            Add to Wishlist
          </Button>
          <Button
            p={7}
            m="10px 20px"
            w="90%"
            bg="whiteAlpha.900"
            border="1px"
            borderColor="gray.400"
          >
            <Text ml="20" fontSize="14px ">
              Try On
            </Text>
            <Image
              src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png"
              alt="img"
              ml="20"
            />
          </Button>
          <Box position="absolute" top="5px" right="5px">
            <AiOutlineHeart size={28} />
          </Box>
          <Select
            placeholder="Technical Information"
            border="0px"
            borderBottom="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="10px"
            fontWeight="500"
          ></Select>
          <Select
            placeholder="Visit Nearby Store"
            border="0px"
            borderBottom="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="10px"
            fontWeight="500"
          ></Select>
          <Select
            placeholder="Check Delivery Options"
            border="0px"
            borderBottom="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="10px"
            fontWeight="500"
          ></Select>
          <Select
            placeholder="Review"
            border="0px"
            borderBottom="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="10px"
            fontWeight="500"
          ></Select>
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/1.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/3.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/4.gif" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/6.jpg" />

          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/7.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/8.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/9.jpg" />
          <Image src="https://static1.lenskart.com/media/desktop/img/23mar/crystal_clear/10.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/green-transparent-full-rim-round-vincent-chase-classic-acetate-vc-e15380-c3-eyeglasses_28_feb_2023_m_f_shoot220765_206642.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/green-transparent-full-rim-round-vincent-chase-classic-acetate-vc-e15380-c3-eyeglasses_28_feb_2023_m_f_shoot220760_206642.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/green-transparent-full-rim-round-vincent-chase-classic-acetate-vc-e15380-c3-eyeglasses_28_feb_2023_m_f_shoot220978_206642.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e15380-c3-eyeglasses_g_7595_21_12_2022.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e15380-c3-eyeglasses_g_7591_image_pla_21_12_2022.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14058-c3-eyeglasses_G_7091.jpg" />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src={data.imageTsrc} />
        </GridItem>
        <GridItem
          borderRadius={10}
          p="80px 5px"
          border="1px solid"
          borderColor="gray.300"
        >
          <Image src={data.imageTsrc} />
        </GridItem>
      </Grid>
      
    </>
  );
};

export default SingleProduct;