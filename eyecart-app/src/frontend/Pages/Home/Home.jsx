import React from 'react'

import Footer from '../../Footer/Footer';
import { 
  Box ,
  Image,
 
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
import Span from "./Span";
import Span1 from "./Span1";
import Span2 from "./Span2";
import { Span4, Span4a, Span4b } from "./Span4";
import { Span5, Span5a, Span5b, Span5c } from "./Span5";
import Span6 from "./Span6";
import Span7 from "./Span7";



export const Home = () => {
  return (
    // //stiky navbar
    <Box>
     
        {/* //middle part */}

        {/* <Span type={HomeData} /> */}
        <Span type={HomeData} />
        <Span1 type={HomeData1} />

       
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

        <Span2
          type={HomeData2}
          //linked={"/personalcare"}
          src="https://i.imgur.com/Gry0Q5D.png"
        />
      
      <Span4
        text="As Seen on Shark Tank"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Span4
        text="As Seen on Karan Johar"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Span4
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Span4
        text="Aquacolor - Glam Up With Color Lenses"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      /> 
     
      <br />
      <br />
     
      
     <Span5/>
      <br />
      <br />
      <br />
      <br />
      <br />
     <Span4a
        text="INTRODUCING OJOS Wear - SUBSCRIBE & SAVE"
        src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
      />
     
      <br />
      <br />
      <Span5a type={HomeData4} heading="CONTACT LENSES & MORE" />
      <br />
      <br />
      <Span5b type={HomeData5} heading="BUY IT YOUR WAY" />
      <br />
      <br />
      <br />
      <br />
      <br></br>
      <Span4b
        text="OUR BRANDS"
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData7} heading="SUNGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <Span4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData7} heading="SUNGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <Span4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <Span4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData10} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <br />
      <Span4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData8} heading="WITH POWER COMPUTER BLU LENSES" />
      <br />
      <br />
      <br />
      <br />
      <Span6
        type={HomeData9}
        heading="WITH ZERO POWER COMPUTER BLU LENSES"
      />
      <br />
      <br />
      <br />
      <br />
      <Span4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
      />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData11} heading="CONTACT LENSES" />
      <br />
      <br />
      <br />
      <br />
      <Span6 type={HomeData12} heading="COLOR CONTACT LENSES" />
      <br />
      <br />
      <br />
      <br />
      <Span4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png"
      />
      <br />
      <br />
      <br />
      <br />
      <Span5c type={HomeData14} heading="MEET OUR HAPPY CUSTOMERS" />

      {/* //Footer part */}
      {/* text info */}
      <Span7 /> 

      {/* footer navigation    */}
      <Footer />

    </Box>
  )
}
