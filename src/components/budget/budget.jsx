import { chartArcs } from "../ui/chartArcs";
import LinearProgress from "@mui/material/LinearProgress";
import { plus } from "../ui/addIcon";
import { edit } from "../ui/edit";
import { trash } from "../ui/remove";
export const Categories = [
  {
    item: "food and dining",
    itemId: "1",
    period: "monthly",
    paid: 100.02,
    total: 1000,
  },
  {
    item: "transport ",
    itemId: "2",
    period: "monthly",
    paid: 100,
    total: 200,
  },
  {
    item: "shopping",
    itemId: "3",
    period: "monthly",
    paid: 100,
    total: 200,
  },
];
function ProgressBar({ progress = 81 }) {
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 10,
        borderRadius: 5,
        mt: 1,
        backgroundColor: "#f0f0f0",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#000000",
        },
      }}
    />
  );
}
function BudgetOverView() {
  return (
    <header className="OuterStyle flex flex-col justify-start gap-6 md:gap-10">
      <div className="flex flex-col gap-1 ">
        <div className="flex justify-start gap-2 items-center ">
          {chartArcs("black")}
          <h1 className="capitalize text-lg font-medium">budget overview </h1>
        </div>
        <div>
          <p className="TextP first-letter:uppercase">
            track your spending agains your budget limit{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-around gap-3">
        <div className="text-center ">
          <h2 className="text-xl md:text-3xl  font-medium ">$3,900</h2>
          <p className="TextP first-letter:uppercase">total Budget</p>
        </div>
        <div className="text-center ">
          <h2 className="text-xl md:text-3xl  font-medium">$3,800</h2>
          <p className="TextP first-letter:uppercase">total spent</p>
        </div>
        <div className="text-center ">
          <h2 className=" text-xl md:text-3xl font-medium">$100</h2>
          <p className="TextP first-letter:uppercase">remaining</p>
        </div>
      </div>
      <div className="flex justify-start gap-2 flex-col">
        <div className="flex justify-between">
          <h3 className="capitalize text-base">overal budget progress</h3>
          <p className="TextP">80%</p>
        </div>
        <ProgressBar />
        {/* <progress className="bg-white rounded-full" value={50} max={100} /> */}
      </div>
    </header>
  );
}
function SingleItem({ Sitem }) {
  const Percentage = Math.round((Sitem.paid * 100) / Sitem.total);
  return (
    <li
      key={Sitem.itemId}
      className="w-full rounded-2xl border-2 border-gray-200 p-4"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0 w-[50%] ">
          <h1 className="capitalize text-lg font-medium">{Sitem.item}</h1>
          <p className="TextP first-letter:uppercase">{Sitem.period} budget </p>
        </div>
        <div className="flex gap-2 justify-start">
          <button>warning</button>
          <button className="Buttons">{edit()}</button>
          <button className="Buttons">{trash()}</button>
        </div>
      </div>
      <div className="flex mt-4 flex-col gap-2 justify-start">
        <div className="flex justify-between">
          <p className="capitalize text-base ">
            ${Sitem.paid} / ${Sitem.total}
          </p>
          <p className="text-black">{Percentage}%</p>
        </div>
        <ProgressBar progress={Percentage} />
        <span className="text-gray-500 text-[14px] self-end">
          ${Sitem.total - Sitem.paid} remaining
        </span>
      </div>
    </li>
  );
}
function BudgetCategories() {
  return (
    <main className="OuterStyle flex flex-col justify-start gap-6 md:gap-10">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-1 w-[50%] ">
          <h1 className="capitalize text-lg font-medium">budget overview </h1>
          <p className="TextP first-letter:uppercase">
            track your spending agains your budget limit{" "}
          </p>
        </div>
        <div>
          <button className="border-2 flex justify-start gap-1 px-3 py-2 border-black bg-black rounded-lg text-white capitalize">
            {plus()} add budget
          </button>
        </div>
      </div>
      <section>
        <ul className="flex flex-col  gap-6">
          {Categories.map((Category) => (
            <SingleItem Sitem={Category} />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default function Budget() {
  return (
    <div className="flex flex-col justify-start gap-10">
      <BudgetOverView />
      <BudgetCategories />
    </div>
  );
}
