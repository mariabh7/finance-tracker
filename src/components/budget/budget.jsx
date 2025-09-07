import { chartArcs } from "../ui/chartArcs";
import LinearProgress from "@mui/material/LinearProgress";
import { plus } from "../ui/addIcon";
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
function BudgetCategories() {
  return (
    <section className="OuterStyle flex flex-col justify-start gap-6 md:gap-10">
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
    </section>
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
