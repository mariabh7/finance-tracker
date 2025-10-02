import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";
import { useRef } from "react";
const data = [
  {
    type: "comment",
    content: {
      comment:
        "this finance tracker is really well done! The layout is clean and intuitive, which makes it easy to follow where the money goes. I like how things are organized here, and the automatic updates give a smooth experience. It’s simple enough for a beginner to use",
      UserName: "maria bouhrem",
    },
  },
  {
    type: "statistics#1",
    content: {
      num: "2000",
      title: " budget overview  ",
      desc: "set a budget and get the details for each one ",
      data: [300, 500, 100],
    },
  },
  {
    type: "statistics#2",
    content: {
      num: "1000",
      title: " income and expenses ",
      desc: "track your incomes and expenses efficiently with finance tracker",
      data: [90, 100, 300],
    },
  },
  {
    type: "comment2",
    content: {
      comment:
        "with finance tracker , i got to orgnise my finances after litteral mess , it did really help me to stay on track and know in which state i was ",
      UserName: "anstasia Z",
    },
  },
  {
    type: "statistics#3",
    content: {
      num: "5000",
      title: "annual and mothly analytics ",
      desc: "we provide monthly and yearly analytics so that you can track your finances efficiently",
      data: [200, 100, 70],
    },
  },
];
function DisplayComment({ Content = {} }) {
  return (
    <div className="flex-col flex justify-between h-full gap-5">
      <div>
        <q className="text-2xl font-bold first-letter:uppercase">
          {Content.comment}
        </q>
      </div>
      <div className="self-end w-full ">
        <div className="flex  items-center justify-start gap-5 ">
          <div className="w-10 h-10 rounded-full  bg-gray-400"></div>
          <div>{Content?.UserName}</div>
        </div>
      </div>
    </div>
  );
}
function DisplayStatistic({ Content = {} }) {
  return (
    <div className="flex flex-col gap-5 justify-start">
      <div className="self-start">
        <h3 className="text-base capitalize">{Content?.title}</h3>
      </div>
      <div className="flex flex-col justify-start gap-2 ">
        <span className="self-start  text-5xl">${Content?.num}</span>
        <p className="self-start text-gray-300">{Content?.desc}</p>
      </div>
      <div className="self-start">
        <BarChart
          xAxis={[{ data: ["january", "february", "march"] }]}
          series={[{ data: Content.data }]}
          height={300}
        />
      </div>
    </div>
  );
}
const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute top-0  py-5 left-[20%] overflow-hidden h-full ">
      <ul className="flex gap-2 h-fit flex-col">
        {data.map((item, index) => {
          return (
            <li
              style={{
                transform: `translateY(-${current * 100}%)`,
              }}
              key={item.type}
              className={`temp transition-all duration-800 delay-300 ease-in-out ${
                item == data[current] ? "opacity-100" : "opacity-35"
              }`}
            >
              {item.type.includes("comment") ? (
                <DisplayComment Content={item.content} />
              ) : (
                <DisplayStatistic Content={item.content} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;
