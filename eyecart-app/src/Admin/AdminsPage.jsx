import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AddAdmin from './AddAdmin'
const AdminsPage = () => {
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
      <p>one!</p>
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
