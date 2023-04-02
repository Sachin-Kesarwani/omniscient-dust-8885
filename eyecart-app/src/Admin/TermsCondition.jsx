import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack,Text, useDisclosure } from "@chakra-ui/react"
import React from "react"

export default function TermsCondition() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
    return (
      <>
        
        <span mt={3} ref={btnRef} onClick={onOpen}>
          Click Here
        </span>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Terms and Conditions</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize={"15px"} >
            Welcome to eyekart! Please read the following terms and conditions carefully before using our website, mobile application, or any of our services. By accessing or using our website or any of our services, you agree to be bound by these terms and conditions. If you do not agree to be bound by these terms and conditions, please do not access or use our website or any of our services.
            <ol>
                <li>
                User Eligibility<br></br>
By using our website or any of our services, you represent that you are at least 18 years old, or that you have obtained the consent of your parent or legal guardian. You also represent that you have not been previously suspended or banned from using our website or services.
                </li>
                <li>Orders and Payments<br></br>
To place an order on our website, you will need to provide us with your personal information, prescription details, and payment information. We accept various payment methods, including credit cards, debit cards, net banking, and cash on delivery. We reserve the right to cancel or refuse any order at any time for any reason.</li>
<li>Shipping and Delivery<br></br>
We offer free shipping and delivery within India for all orders. However, we may charge a shipping fee for international orders. Delivery times may vary depending on your location and the availability of the products you have ordered. We will provide you with an estimated delivery date at the time of placing your order.</li>
<li>Privacy and Security<br></br>
We are committed to protecting your privacy and personal information. We collect and use your information in accordance with our Privacy Policy, which you can find on our website. We also take appropriate measures to ensure the security of your information and transactions.</li>
            </ol>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }