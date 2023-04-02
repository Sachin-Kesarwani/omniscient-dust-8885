import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer, FiUser } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import {useDispatch, useSelector} from "react-redux"
import { GetallAdmins, GetAllproducts, GetAllproductswithoutPage, getAllusers } from '../Redux/AdminRedux/Action';
import { FiUsers } from 'react-icons/fi';
import { Icon } from '@chakra-ui/react';
import { IoIosGlasses } from "react-icons/io";
import { Loading } from '../frontend/Components/Loading';


function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'0px solid'}
     bg={"#3bb4a9"}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}  >
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Home() {
let dispatch=useDispatch()
let [loading,setLoading]=useState(false)
let allusers=useSelector((store)=>store?.adminReducer?.users)
let allproduct=useSelector((store)=>store?.adminReducer?.allproducts)
let alladmin=useSelector((store=>store?.adminReducer?.alladmin))
  useEffect(()=>{
    setLoading(true)
   dispatch(getAllusers())
   dispatch(GetallAdmins())
  
   dispatch(GetAllproductswithoutPage()).then((res)=>{
    setLoading(false)
   })

  },[])
  function closegif(){
    setLoading(false)
  }
  
  
    return  loading?<Loading message={"Getting Latest Data..."} open={loading} close={closegif}/>: (
    <Box  w={{
      base:"260pxpx",
      sm: '520px', // 480px
      md: '520px', // 768px
      lg: '770px', // 992px
      xl: '1030px', // 1280px
      '2xl': '1030px', // 1536px
    }}
     ml={{
      // base:"10px",
      // sm: '50px', // 480px
      md: '30%', // 768px
      lg: '25%', // 992px
      xl: '22%', // 1280px
      '2xl': '22%', // 1536px
    }}
     position={"sticky"} maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h3
        textAlign={'center'}
        fontSize={{
          sm: "xl", // 480px
          md: "2xl", // 768px
          lg: "3xl", // 992px
          xl: "4xl", // 1280px
          '2xl': "4xl", // 1536px
        }}
        py={10}
        fontWeight={'bold'}>
        Our vision to make healthy  eyes.
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, md: 3 }}  color={"white"} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
        
          title={'Users'}
          stat={allusers?.length}
          icon={<FiUsers  color={"white"} size={'3em'} />}
        />
        <StatsCard
          title={'Products'}
          stat={allproduct?.length}
          icon={<IoIosGlasses  color={"white"}  size={'3em'} />}
        />
        <StatsCard
       
          title={'Admins'}
          stat={alladmin?.length}
          icon={<FiUser  color={"white"} size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}