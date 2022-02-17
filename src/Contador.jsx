import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Contenedor = styled.div`
   display: flex;
   justify-content: center;
   gap: 30px;
   margin-top: 25px;

   @media screen and (max-width: 600px) {
      gap: 15px;
   }

   @media screen and (max-width: 400px) {
      gap: 10px;
   }
`;

const Card = styled.div`
   display: flex;
   margin-top: 30px;
   flex-direction: column;
   color: white;
   align-items: center;
   gap: 30px;

   span {
      font-weight: lighter;
      letter-spacing: 0.3em;
      color: hsl(237, 18%, 59%);
   }

   @media screen and (max-width: 600px) {
      font-size: 0.8rem;
   }

   @media screen and (max-width: 400px) {
      span {
         font-size: 0.6rem;
      }
   }
`;

const Numero = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   /* border: 2px solid white; */
   background-color: hsl(236, 21%, 26%);
   color: hsl(345, 95%, 68%);
   width: 8.75rem;
   height: 130px;
   border-radius: 5px;
   font-size: 4rem;

   box-shadow: 0px 10px 4px 0px rgba(21, 8, 37, 0.8);

   @media screen and (max-width: 600px) {
      width: 5.8rem;
      height: 5.6rem;
      font-size: 3rem;
   }

   @media screen and (max-width: 400px) {
      width: 4.8rem;
      height: 4.6rem;
      font-size: 2rem;
   }
`;

const Contador = () => {
   const [sec, setSec] = useState(59);
   const [minute, setMinute] = useState(59);
   const [hour, setHour] = useState(23);
   const [day, setDay] = useState(8);

   let intervaloSec = useRef();
   let intervaloHour = useRef();
   let intervaloMinute = useRef();
   let intervaloDay = useRef();

   const backSec = () => setSec((num) => num - 1);
   const backMinute = () => setMinute((num) => num - 1);
   const backHour = () => setHour((num) => num - 1);
   const backDay = () => setDay((num) => num - 1);

   if (sec < 0) {
      setSec(59);
   }
   if (minute < 0) {
      setMinute(59);
   }
   if (hour < 0) {
      setSec(23);
   }

   useEffect(() => {
      intervaloSec.current = setInterval(backSec, 1000);
      intervaloMinute.current = setInterval(backMinute, 60000);
      intervaloHour.current = setInterval(backHour, 3600000);
      intervaloDay.current = setInterval(backDay, 3600000 * 24);
   }, []);

   return (
      <Contenedor>
         <Card>
            <Numero>{day}</Numero>
            <span>DAYS</span>
         </Card>
         <Card>
            <Numero>{hour}</Numero>
            <span>HOURS</span>
         </Card>
         <Card>
            <Numero>{minute}</Numero>
            <span>MINUTES</span>
         </Card>
         <Card>
            <Numero>{sec}</Numero>
            <span>SECONDS</span>
         </Card>
      </Contenedor>
   );
};

export default Contador;
