import { Button, Heading, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
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
}

export default Home
