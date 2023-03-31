import { Button, Heading, Image } from '@chakra-ui/react'
import { Loading } from '../frontend/Components/Loading'

import { ReactText, useState } from 'react';


 const Home = () => {
    let [loading,setLoading]=useState(false)
    function closegif(){
        setLoading(false)
    }
  return  (
    <div>
      <Heading>Home</Heading>
      <Image width="100px" margin={"auto"} src="https://i.gifer.com/87Hq.gif"/>
      <Button onClick={()=>setLoading(!loading)}>vlllll</Button>
  {/* <EmailSender/> */}
    </div>
  )
  }

export default Home



