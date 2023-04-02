import React from 'react'
import { NavbarCard2, NavbarCard3, NavCard1 } from './NavCard'
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


export const Navbar = () => {
  return (
    <Box position="fixed" zIndex="100"color={"black"}  backgroundColor="white" top={0} >
      <NavCard1 />
     <NavbarCard2/>
     <NavbarCard3/>
     
    </Box>
  )
}
