import { chartArcs } from "../ui/chartArcs";
import LinearProgress from "@mui/material/LinearProgress";
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
    <header className="OuterStyle flex flex-col justify-start gap-10">
      <div className="flex flex-col gap-1 ">
        <div className="flex justify-start gap-2 items-center ">
          {chartArcs("black")}
          <h1 className="capitalize text-lg font-medium">budget overview </h1>
        </div>
        <div>
          <p className=" first-letter:uppercase text-base text-gray-500">
            track your spending agains your budget limit{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-around gap-3">
        <div className="text-center ">
          <h2 className="text-2xl">$3900</h2>
          <p className="first-letter:uppercase text-base text-gray-500">
            total Budget
          </p>
        </div>
        <div>
          <h2>$3800</h2>
          <p>total spent</p>
        </div>
        <div>
          <h2>$100</h2>
          <p>remaining</p>
        </div>
      </div>
      <div>
        <div>
          <h3>overal budget progress</h3>
          <p>80%</p>
        </div>
        <ProgressBar />
        {/* <progress className="bg-white rounded-full" value={50} max={100} /> */}
      </div>
    </header>
  );
}
export default function Budget() {
  return (
    <div className="w-full">
      <BudgetOverView />
    </div>
  );
}
