'use client';
import React, { useEffect, useState } from "react";
import { Caladea } from "next/font/google";
import Image from "next/image";
import scendflower from "@/assests/scendflower.png";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Commented out
import Third from "@/components/Third";

const caladea = Caladea({
  weight: "400",
  subsets: ["latin"],
});

const Scend = () => {
  const [showScend, setShowScend] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScend(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showScend) {
    return <Third />;
  }

  return (
    <div className="bg-white h-screen w-full flex justify-center items-center overflow-hidden">
      <div className="w-[296px] h-[403px] md:w-[400px] md:h-[500px] relative">
        {/* Commenting out the loading animation */}
        {/* <div className="absolute inset-0 flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/cae4d7e1-552a-4bfc-a67c-095117d5a0a3/vr4tSyzBpB.lottie"
            loop
            autoplay
          />
        </div> */}
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
