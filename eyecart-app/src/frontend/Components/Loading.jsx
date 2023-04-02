import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import React, { useEffect } from 'react'
import { Image ,useDisclosure,Text,Button,Heading} from '@chakra-ui/react'
export function Loading({open,close,message}) {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  


function opengif(){
    setOverlay(<OverlayOne />)
   onOpen() 
}
useEffect(()=>{
    opengif()
  
},[open])


function closemodal(){
onClose()
close()
}

    return (
      <>
    
       
        <Modal isCentered isOpen={isOpen} onClose={()=>closemodal(onClose)}>
          {overlay}
          <ModalContent>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <ModalCloseButton /> */}
            <ModalBody>
              {/* <Text>Custom backdrop filters!</Text> */}
              <Image width="150px" margin={"auto"} src="https://i.gifer.com/87Hq.gif"/>
              <Heading color={"#680ae7"} as="h2" textAlign={"center"}>{message}</Heading>
            </ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>Close</Button> */}
            </ModalFooter>
          </ModalContent>
       
        </Modal>
      </>
    )
  }