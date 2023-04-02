import React from "react";
import { Box, Grid, Center } from "@chakra-ui/react";
import { FooterCard1, FooterCard2, FooterCard } from "./FooterCard";
import Span7 from "../Pages/Home/Span7";

 const services = [
  {
    labels: "Store Locator",
  },
  {
    labels: "Enter My Power",
  },
  {
    labels: "Buying Guide",
  },
  {
    labels: "Frame Size",
  },
];

const about = [
  {
    labels: "We Are Hiring",
  },
  {
    labels: "Refer & Earn",
  },
  {
    labels: "About Us",
  },
  {
    labels: "Lenskart Coupons",
  },
];

 const helps = [
  {
    labels: "FAQ's",
  },
];


const Footer = () => {
  return (
    <>
     <Span7 />
    <Box bgColor="#000042" color="whiteAlpha.900">
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)"
        }}
        justifyContent="space-between"
        textAlign="left"
        ml="2%"
      >
        <Box w="60%" pl="5">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)"
            }}
            gap="5"
          >
            <FooterCard1 type={services} heading="Services" />
            <FooterCard1 type={about} heading="About Us" />
            <FooterCard1 type={helps} heading="Help" />
          </Grid>
        </Box>
        <Center>
          <FooterCard2 />
        </Center>
      </Grid>
      <hr />
      <FooterCard />
     
    </Box>
    </>
    
  );
};

export default Footer;
