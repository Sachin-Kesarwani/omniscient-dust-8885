import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AddAdmin from './AddAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { GetallAdmins } from '../Redux/AdminRedux/Action'
const AdminsPage = () => {
  let dispatch=useDispatch()
  let admins=useSelector((store)=>store?.adminReducer?.alladmin)
  useEffect(()=>{
dispatch(GetallAdmins())
  },[])
  return (
    <Box w={{
      sm: '100%', // 480px
      md: '70%', // 768px
      lg: '80%', // 992px
      xl: '80%', // 1280px
      '2xl': '85%', // 1536px
    }} ml={{
      sm: '0px', // 480px
      md: '30%', // 768px
      lg: 'auto', // 992px
      xl: 'auto', // 1280px
      '2xl': 'auto', // 1536px
    }}>
 <Tabs   isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab  _selected={{ color: 'white', bg: '#006666' }} >Admins</Tab>
    <Tab   _selected={{ color: 'white', bg: '#006666' }}>Make Admin</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Box m={"auto"} gap={"10px"} padding={"auto"} w="100%" display={"grid"} gridTemplateColumns={ {
  sm: "repeat(2,1fr)", // 480px
  md: "repeat(2,1fr)", // 768px
  lg:"repeat(3,1fr)", // 992px
  xl:"repeat(3,1fr)", // 1280px
  '2xl': "repeat(3,1fr)", // 1536px
}}>
      {
    admins?.map((e)=>{
      return <Box margin={"auto"} bg={"white"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"} borderRadius={"5px"} padding={"5px"} w={"250px"}>
     
     <Text>Name : {e.name}</Text>
     <Text>Email :{e.email}</Text>
      </Box>
    })
   }
      </Box>
  
    </TabPanel>
    <TabPanel>
     <AddAdmin/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
  )
}

export default AdminsPage
