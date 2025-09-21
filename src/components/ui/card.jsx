import React from "react";
import { trendingUp } from "./up";
import { trendingDown } from "./down";
import { pigMoney } from "./saving";
import { calendarEvent } from "./calender";
function Card({ title, number, description }) {
  return (
    <div className="flex OuterStyle flex-col justify-between gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-lg capitalize text-black ">{title}</h3>
        {title.includes("income")
          ? trendingUp()
          : title.includes("expense")
          ? trendingDown()
          : null}
      </div>
      <div>
        <h4
          className={`text-2xl mb-2 font-medium ${
            title.includes("income")
              ? "text-green-600"
              : title.includes("expense")
              ? "text-red-600"
              : "text-black"
          }`}
        >
          ${number}
        </h4>
        {description ? (
          <p className="text-gray-400 text-sm">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
