"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timer from "./Timer";
import { Coda } from "next/font/google";
import { Caladea } from "next/font/google";
import Image from "next/image";

import topflower from "@/assests/topflower.png";
import c1bride from "@/assests/c1bride.png";
import c2bride from "@/assests/c2bride.png";
import c3bride from "@/assests/c3bride.png";

const coda = Coda({
  weight: "800",
  subsets: ["latin"],
});

const caladea = Caladea({
  weight: "400",
  subsets: ["latin"],
});

const arr = [
  {
    h: "MEHNDI CEREMONY",
    p1: "Timing 6:00 PM To 10:00 PM",
    p2: "Friday, December 20th 2024",
    p3: "",
    hone: "Ghori Town, street",
    htwo: "18, phase 5B, Islamabad",
    img: c1bride,
    style:
      "h-32 w-7 bottom-[.8rem] right-[2rem] md:h-52 md:w-11 md:bottom-[1.5rem] md:right-[3.3rem]",
    expiryTimestamp: new Date("2024-12-20T18:00:00"),
  },
  {
    h: "Barat CEREMONY",
    p1: "Saturday, 21 December 2024",
    p2: "Sehra Bandi 12:00 PM",
    p3: "Barat Departure 1:00 PM",
    hone: "Ghori Town, street",
    htwo: "18, phase 5B, Islamabad",
    img: c2bride,
    style:
      "w-72 h-[23rem] bottom-[.7rem] right-[1.7rem] md: h-[33rem] md:w-[30rem] md:bottom-[1.6rem] md:right-[4rem]",
    expiryTimestamp: new Date("2024-12-21T12:00:00"),
  },
  {
    h: "WALIMA CEREMONY",
    p1: "Sunday, December 22th 2024",
    p2: "Check in time 1:00 PM ",
    p3: "Lunch Time :  2:00 PM ",
    hone: "White Castle Marque",
    htwo: "Miani",
    img: c3bride,
    style:
      "w-36 h-80 bottom-[0.8rem] -right-[10px] md: h-[24rem] md:w-[14rem] md:bottom-[1.6rem] md:-right-[.8rem]",
    expiryTimestamp: new Date("2024-12-22T13:00:00"),
  },
];


const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      startEvent: "scroll",
    });
  }, []);

  return (
    <div className="space-y-28 pt-14 pb-16">
      {arr.map((item, index) => (
        <div
          className="relative bg-[#FEDFE3] w-[318px] h-[310px] md:w-[35rem] md:h-[27rem] py-3 px-4 md:px-8 md:py-6 mx-auto text-black rounded shadow-xl"
          key={index}
          data-aos="zoom-in-up"
        >
          <div className="border border-[#BB9096] w-full h-[100%] flex flex-col justify-center items-center">
            <Image
              src={topflower}
              alt="flower"
              className="absolute -top-12 left-12 md:w-80 md:-top-16 md:left-32"
            />
            <h1
              className={`text-[#184F44] tracking-[3px] font-extrabold text-[14px] md:text-[24px] pb-4 ${coda.className}`}
            >
              {item.h}
            </h1>
            <div
              className={`text-center text-[14px] md:text-[24px] ${caladea.className} z-10`}
            >
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
              <Timer expiryTimestamp={item.expiryTimestamp} />
              <h1 className="text-center text-[18px] md:text-[28px] font-bold pt-2">
                {item.hone}
              </h1>
              <h1 className="text-center text-[18px] md:text-[28px] font-bold">
                {item.htwo}
              </h1>
            </div>
            <Image src={item.img} alt="" className={`absolute ${item.style}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
