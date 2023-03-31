import React from 'react'
import { Navbar } from '../../Navbar/Navbar'
import { 
  Box ,
  Image,
  Divider,
  Text,
  Stack,
} 
from "@chakra-ui/react";
import {
  HomeData,
  HomeData1,
  HomeData2,
  HomeData4,
  HomeData5,
  HomeData6,
  HomeData7,
  HomeData8,
  HomeData9,
  HomeData10,
  HomeData11,
  HomeData12,
  HomeData14,
} from "./HomeData";
import HomeSpan from "./HomeSpan";
import HomeSpan1 from "./HomeSpan1";
import HomeSpan2 from "./HomeSpan2";
import { HomeSpan4, HomeSpan4a, HomeSpan4b } from "./HomeSpan4";
import { HomeSpan5, HomeSpan5a, HomeSpan5b, HomeSpan5c } from "./HomeSpan5";
import HomeSpan6 from "./HomeSpan6";
import HomeSpan7 from "./HomeSpan7";



export const Home = () => {
  return (
    <Box>
        <Navbar />
        <HomeSpan type={HomeData} />
        <HomeSpan1 type={HomeData1} />
       
        <Image 
          src='https://static1.lenskart.com/media/desktop/img/Feb23/23feb/PREMIUM%20BRANDS%20WEB.jpg'
          alt='Gold Membership'
          mt="10"
        />

        <Image
          src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
          alt="img"
          mt="10"
        />

        <HomeSpan2
          type={HomeData2}
          //linked={"/personalcare"}
          src="https://i.imgur.com/Gry0Q5D.png"
        />
      
      <HomeSpan4
        text="As Seen on Shark Tank"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4
        text="As Seen on Karan Johar"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4
        text="Aquacolor - Glam Up With Color Lenses"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      /> 
     
      <br />
      <br />
     
      
     <HomeSpan5/>
      <br />
      <br />
      <br />
      <br />
      <br />
     <HomeSpan4a
        text="INTRODUCING OJOS Wear - SUBSCRIBE & SAVE"
        src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
      />
     
      <br />
      <br />
      <HomeSpan5a type={HomeData4} heading="CONTACT LENSES & MORE" />
      <br />
      <br />
      <HomeSpan5b type={HomeData5} heading="BUY IT YOUR WAY" />
      <br />
      <br />
      <br />
      <br />
      <br></br>
      <HomeSpan4b
        text="OUR BRANDS"
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData7} heading="SUNGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData7} heading="SUNGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData10} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData8} heading="WITH POWER COMPUTER BLU LENSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6
        type={HomeData9}
        heading="WITH ZERO POWER COMPUTER BLU LENSES"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData11} heading="CONTACT LENSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan6 type={HomeData12} heading="COLOR CONTACT LENSES" />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeSpan5c type={HomeData14} heading="MEET OUR HAPPY CUSTOMERS" />
      <HomeSpan7 />

    </Box>
  )
}
