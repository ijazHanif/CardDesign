'use client';
import React, { useEffect, useState } from "react";
import { Caveat_Brush } from "next/font/google";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Commented out

const CaveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
});

const First = () => {
  // const [showScend, setShowScend] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowScend(true);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showScend) {
  //   return <Scend />;
  // }

  return (
    <div className="bg-[#D49494] h-screen w-full flex flex-col justify-center items-center">
      <div
        className={`${CaveatBrush.className} text-4xl md:text-6xl w-72 h-36 md:w-96 tracking-[10px] px-6 text-center`}
        style={{ lineHeight: "1.5" }}
      >
        Welcome To our Love story
      </div>
      {/* Commenting out the loading animation */}
      {/* <div className="absolute flex justify-center items-center w-full h-full">
        <DotLottieReact
          className="mt-6 flex justify-center items-center w-80 h-80 md:w-96 md:h-96"
          src="https://lottie.host/cae4d7e1-552a-4bfc-a67c-095117d5a0a3/vr4tSyzBpB.lottie"
          loop
          autoplay
          style={{ width: "80px", height: "80px" }}
        />
      </div> */}
    </div>
  );
};

export default First;
