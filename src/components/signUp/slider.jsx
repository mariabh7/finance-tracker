import React, { useEffect, useState } from "react";
import { useRef } from "react";
const data = [1, 2, 3, 4, 5];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute top-0  py-5 left-[20%] overflow-y-scroll h-screen ">
      <ul className="flex gap-2 h-fit flex-col">
        {data.map((item) => {
          return (
            <li
              style={{
                transform: `translateY(-${current * 100}%)`,
              }}
              key={item}
              className="temp transition-transform duration-700 ease-in-out"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;
