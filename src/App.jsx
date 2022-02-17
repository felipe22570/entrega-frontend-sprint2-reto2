import React from "react";
import styled from "styled-components";

import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import "./App.css";
import Contador from "./Contador";

const Background = styled.div`
   background-image: url("https://res.cloudinary.com/dcane9asx/image/upload/v1644892370/bg-stars_baebmk.svg");
   background-color: hsl(235, 16%, 14%);
   height: 600px;
`;

const Footer = styled.div`
   position: absolute;
   bottom: 0;
   margin: 0;
   width: 100%;
   height: 150px;
   padding-bottom: 0;
   background: url("https://res.cloudinary.com/dcane9asx/image/upload/v1644892363/pattern-hills_g8t9cm.svg");
`;

const Iconos = styled.div`
   width: 100%;
   height: 100%;
   gap: 25px;
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;

   img {
      cursor: pointer;
   }
`;

const Titulo = styled.span`
   display: flex;
   justify-content: center;
   padding-top: 110px;
   font-size: 20px;
   color: white;
   letter-spacing: 0.3em;
   text-align: center;

   @media screen and (max-width: 400px) {
      font-size: 18px;
      margin-left: 25px;
      margin-right: 25px;
   }
`;

const App = () => {
   return (
      <div>
         <Background>
            <Titulo>WE'RE LAUNCHING SOON</Titulo>
            <Contador />
         </Background>

         <Footer>
            <Iconos>
               <img src={facebook} alt="" />
               <img src={pinterest} alt="" />
               <img src={instagram} alt="" />
            </Iconos>
         </Footer>
      </div>
   );
};

export default App;
