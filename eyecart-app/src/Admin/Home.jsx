
// import React, { useEffect } from 'react'
// import { useDispatch,useState, useSelector } from 'react-redux'
// import { GetAlldata } from '../Redux/AdminRedux/Action'
// import { store } from '../Redux/store'
import { Button, Heading, Image } from '@chakra-ui/react'
import { Loading } from '../frontend/Components/Loading'

const Home = () => {
    let [loading,setLoading]=useState(false)
    function closegif(){
        setLoading(false)
    }
  return loading?<Loading message={"Loading..."} open={loading} close={closegif}/>: (
    <div>
      <Heading>Home</Heading>
      <Image width="100px" margin={"auto"} src="https://i.gifer.com/87Hq.gif"/>
      <Button onClick={()=>setLoading(!loading)}>vlllll</Button>
  
    </div>
  )

// export default Home
import React, { ReactNode, useContext, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading,
  useConst,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
  FiBox
} from 'react-icons/fi';
// import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { AuthContext } from './Context/Context';
import logo from "./logo.jpg"

const LinkItems= [
  { id:1 ,name: 'Home', icon:FiUser },
  { id:2,name: 'All Products', icon: FiBox },
  { id:3 ,name: 'Explore', icon: FiCompass },
  {id:4, name: 'Favourites', icon: FiStar },
  { id:5,name: 'Settings', icon: FiSettings },
];

export default function AdminHome({children,}) {
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      <Heading>Hiiiiiiiiiiiiiiiiii</Heading>
    </Box>
  );

}

export default Home
