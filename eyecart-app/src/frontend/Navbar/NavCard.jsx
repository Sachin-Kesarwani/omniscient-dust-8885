import React from 'react';
import {
    Box,
    Text,
    Flex,
    Spacer,
    Image,
    Input,
    Button,
    HStack,
 

} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { Link, Navigate } from "react-router-dom";
import CategoryMenubar from "./CategoryMenubar";
import { useNavigate } from "react-router-dom";

const Navinfo1 = [
    {
      labels: "Do more, Be More  | "
    },
    {
      labels: "Try in 3D  | "
    },
    {
      labels: "Store Locator  | "
    },
    {
      labels: "Quality  | "
    },
    {
      labels: "USA  | "
    },
    {
      labels: "Singapore  | "
    },
    {
      labels: "UAE  | "
    },
    {
      labels: "John Jacobs  | "
    },
    {
      labels: "Aqualens  | "
    },
    {
      labels: "Cobrowsing  | "
    },
    {
      labels: "Engineering Blog  | "
    },
    {
      labels: "Lenskart Franchise  | "
    },
    {
        labels: "Lenskart Optom Partner Program  | "
    },
    {
      labels: "Contact us"
    }
  ];
  
//nav bar-I
export const NavCard1 = () => {
    return (
      <Box cursor="pointer">
        <Flex gap={2} pl={5} pt={2}>
          {Navinfo1.map((i, index) => (
            <Box key={index}>
              <Text fontSize="12px" _hover={{ textDecoration: "underline" }}>
                {i.labels}
              </Text>
              <Spacer />
            </Box>
          ))}
        </Flex>
      </Box>
    );
  };

//nav bar-II search,logo, auth, cart
export const NavbarCard2 = () => {
    const navigate = useNavigate();
  
    return (
      <Box cursor="pointer">
          
        <HStack m="auto">

          {/* logo icon */}
          <Box w="20%">
            <Link to="/">
              <Image src="https://i.postimg.cc/x1JsJcRj/eyekart.jpg" alt="logo" w="75%" />
            </Link>
          </Box>
          <HStack w="85%" m="auto">
          {/* //caller num */}
            <Box w="15%">
              <HStack fontSize="18px" fontWeight="bold">
                <FiPhoneCall />
                <Text>1800-111-111</Text>
              </HStack>
            </Box>

              {/* //search bar */}
            <Box w="55%">
              <Input
                placeholder="What are you looking for"
                border="1px solid black"
                w="95%"
                fontSize="17px"
                h="45px"
              />
            </Box>

            <HStack w="35%">

            {/* //order button */}
              <Button
                size="lg"
                bg="whiteAlpha.900"
                fontSize="15px"
                fontWeight="400"
                onClick={() => navigate("/orderHistory")}
              >
                Track Order
              </Button>

              {/* //login signup */}
              <Box display={"flex"}>
                 Login | Signup
              </Box>
               {/* Wishlist button */}
              <Button
                leftIcon={<CiHeart />}
                size="lg"
                bg="whiteAlpha.900"
                fontSize="15px"
                fontWeight="400"
                onClick={() => navigate("/wishlist")}
              >
                Wishlist
              </Button>

              {/* Cart button */}
              <Link to="/cartpage">
                <Button
                  leftIcon={<CgShoppingCart />}
                  size="lg"
                  bg="whiteAlpha.900"
                  fontSize="15px"
                  fontWeight="400"
                >
                  Cart
                </Button>
              </Link>
            </HStack>
          </HStack>
        </HStack>
      </Box>
    );
  };
  
  export const NavbarCard3 = () => {
    return (
      <Box cursor="pointer" bg="#fbf9f7" p={2.5}>
        <Flex gap={4} pl={5} pt={2} justifyContent="space-between">

          {/* // CATEGORY menu bar */}
          <CategoryMenubar />


          <HStack w="20%" ml="5%" justifyContent="right">
            <Image
              src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
              alt="img1"
              w="70px"
              borderRadius="base"
            />
            <Image
              src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
              alt="img1"
              w="70px"
              borderRadius="base"
            />
            <Image
              src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
              alt="img1"
              w="70px"
              borderRadius="base"
            />
          </HStack>
        </Flex>
      </Box>
    );
  };
  
