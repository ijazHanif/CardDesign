"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Dr_Sugiyama, Caladea, Great_Vibes } from "next/font/google";
import Image from "next/image";
import third1 from "@/assests/third1.png";
import Cards from "./Cards";

const DrSugiyama = Dr_Sugiyama({
  weight: "400",
  subsets: ["latin"],
});

const caladea = Caladea({
  weight: "400",
  subsets: ["latin"],
});

const GreatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Third = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      startEvent: "scroll",
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* First part */}
      <div className="w-full relative">
        <div className="relative">
          <Image
            src={third1}
            alt="Wedding Invitation"
            className="w-full object-contain"
          />
          <div
            className={`${DrSugiyama.className} absolute inset-0 flex items-center justify-center`}
          >
            <h1 className="text-white text-5xl md:text-8xl tracking-[5px] md:tracking-[10px] leading-[1.2] text-center drop-shadow-lg w-52">
              You are invited
            </h1>
          </div>
        </div>
      </div>

      {/* Second part */}
      <div className="font-extrabold pt-10" data-aos="zoom-in-up">
        <h1
          className={`${caladea.className} text-[#D49494] text-center md:text-[30px]`}
        >
          FOR THE WEEDING OF
        </h1>
        <h1
          className={`${GreatVibes.className} text-[#965A00] text-[40px] md:text-[70px] !font-extrabold tracking-[6px] text-center`}
        >
          Esha & Zaryab
        </h1>
      </div>

      {/* Cards Component */}
      <Cards />
    </div>
  );
};

export default Third;
