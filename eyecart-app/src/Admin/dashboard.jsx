// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { GetAlldata } from '../Redux/AdminRedux/Action'
// import { store } from '../Redux/store'

// const Home = () => {

// let dispatch=useDispatch()
// let data=useSelector((store)=>console.log(store))
//     useEffect(()=>{
// dispatch(GetAlldata)
//     },[])
//     console.log(data)
//   return (
//     <div>
      
//     </div>
//   )
// }

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
  FiBox,
  FiEdit3,
  FiUsers
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { AuthContext } from './Context/Context';
import logo from "./logo.jpg"
import Signup from '../frontend/Login_Signup/Signup';
import Login from '../frontend/Login_Signup/Login';
import AllProducts from './AllProducts';
import AdminsPage from './AdminsPage';
import Users from './Users';
import AddProducts from './AddProducts';
import Home from './Home';
import { useNavigate } from 'react-router-dom';


const LinkItems= [
  { id:1 ,name: 'Home', icon:FiUser },
  { id:2,name: 'All Products', icon: FiBox },
  { id:3 ,name: 'Admins', icon: FiUser },
  {id:4, name: 'Users', icon:FiUsers },
  { id:5,name: 'Add Products', icon: FiEdit3 },
];

export default function AdminHome({children,}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let {active,setActive,closeSomething}=useContext(AuthContext)


  return (
    <Box minH="100vh"  bg={useColorModeValue('gray.100', 'gray.900')}>
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

      {
active==1?<Home/>:active==2?<AllProducts/>:active==3?<AdminsPage/>:active==4?<Users/>:<AddProducts/>
      }
    
      {/* <Signup/>
      <Login/> */}
      <h1>sjshshsh</h1>
    
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  let {active,setActive,closeSomething}=useContext(AuthContext)
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Image src={logo}/>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={()=>closeSomething(onClose)} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} onClose={onClose} active={active} id={link.id} setActive={setActive} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, onClose,children,id, ...rest}) => {

  let {active,setActive,closeSomething}=useContext(AuthContext)

  function CloseSidebar(){
   
    setActive(id) 
  
  closeSomething(onClose)
   
  }
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
      bg={active==id?'#3bb4a9':"#ecedeb"}
      color={active==id?'white':"black"}
      onClick={()=> CloseSidebar(id)}
     
        align="center"
        p="2"
        mx="4"
       marginTop={"3px"}
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#3bb4a9',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  localStorage.setItem("admindata",JSON.stringify("Sachin Kesarwani"))
  let data=JSON.parse(localStorage.getItem("admindata"))
  let navigate=useNavigate()
  function sendtoHome(){
     navigate("/")
  }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
      textAlign={"center"}
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
       Admin Dashboard
      </Text>
      {/* <Image src={logo}/> */}
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{data}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  {/* <FiChevronDown /> */}
                </Box>
              </HStack>
            </MenuButton>
            {/* <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={sendtoHome}>Sign out</MenuItem>
            </MenuList> */}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};