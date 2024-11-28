'use client';

import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

  if (!isClient) {
    return (
      <div className="text-center text-[#184F44] mt-4 flex justify-center gap-2">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <button
            key={unit}
            className="rounded-md bg-[#BB9096] text-white px-4 py-2 text-[14px] md:text-[20px] shadow-md"
          >
            <span className="block text-[10px] md:text-[14px] capitalize">
              {unit}
            </span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="text-center text-[#184F44] mt-4 flex justify-center gap-2">
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <button
          key={unit}
          className="rounded-md bg-[#BB9096] text-white px-1 sm:px-2 lg:px-4 lg:py-2 text-[14px] md:text-[20px] shadow-md
             hover:shadow-lg hover:bg-[#184F44] hover:text-[#FEDFE3] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {index === 0
            ? days
            : index === 1
            ? hours
            : index === 2
            ? minutes
            : seconds}
          <span className="block text-[10px] md:text-[14px] capitalize">
            {unit}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Timer;
