'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Caladea } from "next/font/google";
import Image from "next/image";
import scendflower from "@/assests/scendflower.png";

const caladea = Caladea({
  weight: "400",
  subsets: ["latin"],
});

const Scend = () => {  
  useEffect(() => {
   
    AOS.init({
      duration: 1000,  
      once: false,  
      startEvent: 'scroll', 
    });
  }, []);

  return (
    <div className="bg-white h-screen w-full flex justify-center items-center overflow-hidden" >
      <div className="w-[296px] h-[403px] md:w-[400px] md:h-[500px] relative" data-aos="zoom-in-up">
        <h1
          className={`${caladea.className} text-[#BB9096] text-2xl md:text-3xl text-center`}
        >
          THE WEDDING
        </h1>

        <div className="relative mt-4">
          <div
            className={`${caladea.className} absolute top-[35%] left-1/2 transform -translate-x-1/2 text-[#965A00]
              text-4xl md:text-6xl text-center tracking-[10px] md:tracking-[6px]`}
          >
            <div>ESHA</div>
            <div>&</div>
            <div>ZARYAB</div>
          </div>

          <Image
            src={scendflower}
            alt="flowers"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Scend;
