import { LineChart } from "@mui/x-charts";
import { SparkLineChart } from "@mui/x-charts";
import Stack from "@mui/material/Stack";
import Card from "../ui/card";
import ProgressBar from "../ui/Progress";
import { useState } from "react";
import HeadingContent from "../ui/CardHeader";
// savings rate trend component
function SpendingsOverview() {
  const monthlysaving = [
    { month: "Jan", savings: 2500 },
    { month: "Feb", savings: 2000 },
    { month: "Mar", savings: 4500 },
    { month: "Apr", savings: 4000 },
    { month: "May", savings: 3100 },
    { month: "Jun", savings: 4200 },
  ];

  return (
    <div className="OuterStyle">
      <HeadingContent
        title={"savings trend"}
        description={"monthly saving accumulation"}
      />
      <LineChart
        xAxis={[
          {
            scaleType: "band",
            data: monthlysaving.map((datas) => datas.month),
          },
        ]}
        series={[
          {
            data: monthlysaving.map((datas) => datas.savings),
            color: "#2563EB",
          },
        ]}
        yAxis={[{ min: 0, max: 5100 }]}
        height={300}
        sx={{
          "& .MuiChartsPlotArea-root": {
            fill: "#2563EB",
          },
        }}
      />
    </div>
  );
}
// set saving goal component
function SetGoal() {
  return (
    <div>
      <div className="OuterStyle flex flex-col gap-5">
        <HeadingContent
          title={"savings goals progress"}
          description={"track your progress towards your savings target"}
        />
        <div>
          <div className="flex gap-2 flex-col items-center ">
            <h2 className="text-4xl text-blue-600 font-medium">$3200</h2>
            <span className="text-gray-400">of $5000 goal</span>
          </div>
          <div>
            <div className="flex justify-between">
              <label className="capitalize">progress</label>
              <span>50%</span>
            </div>
            <ProgressBar progress={20} />
          </div>
        </div>
        <div className=" my-10 flex justify-around">
          <div className="flex  flex-col items-center ">
            <h2 className="text-xl text-black font-medium">$800</h2>
            <span className="text-gray-400">monthly target</span>
          </div>
          <div className="flex  flex-col items-center ">
            <h2 className="text-xl text-black font-medium">3</h2>
            <span className="text-gray-400">months to go</span>
          </div>
        </div>
      </div>
    </div>
  );
}
// financial monthly review
function FinancialMonthsOverview() {
  const monthlyData = [
    { month: "Jan", income: 4000, expenses: 2400 },
    { month: "Feb", income: 3000, expenses: 1398 },
    { month: "Mar", income: 5000, expenses: 3800 },
    { month: "Apr", income: 4500, expenses: 3908 },
    { month: "May", income: 3800, expenses: 2800 },
    { month: "Jun", income: 4200, expenses: 3200 },
  ];
  return (
    <div className="OuterStyle">
      <HeadingContent
        title={"income vs expenses trends"}
        description={"7- months finacial overview"}
      />
      <LineChart
        xAxis={[
          {
            scaleType: "band",
            data: monthlyData.map((item) => item.month),
            grid: true,
          },
        ]}
        series={[
          {
            data: monthlyData.map((item) => item.income),
            color: "#10b981",
          },
          {
            data: monthlyData.map((item) => item.expenses),
            color: "#ef4444",
          },
        ]}
        height={300}
      />
    </div>
  );
}
// trends section
function TrendsData() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FinancialMonthsOverview />
      <SpendingsOverview />
    </div>
  );
}
function GoalsData() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SetGoal />
    </div>
  );
}
// whole analytics components that consist of prev comps
function Analytics() {
  const Gen = ["trends", "goals"];
  const [see, setSee] = useState("trends");
  return (
    // provide analytics monthly in backend
    <>
      <header
        data-slot="dashboard-header"
        className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Card
          title={"avg monthly income "}
          number={3000}
          description={"+12% from last month"}
        />
        <Card
          title={"avg monthly expense"}
          number={4000}
          description={"-8% from last month"}
        />
        <Card
          title={"avg savings rate"}
          number={26.9}
          description={"24.0% saving rate"}
        />
        <Card
          title={"days to goal"}
          number={90}
          description={"of monthly budget used"}
        />
      </header>
      <main className="flex flex-col gap-5 mb-5 md:mb-0">
        <div className="flex w-fit  capitalize justify-start gap-5 bg-gray-200  px-3 rounded-4xl">
          {Gen.map((cat, i) => {
            return (
              <button
                key={i + 1}
                onClick={() => {
                  setSee(cat);
                }}
                className={`capitalize my-2 py-[0.5px] px-4 rounded-full cursor-pointer text-base ${
                  see === cat ? "bg-white" : "bg-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <section>{see === "trends" ? <TrendsData /> : <GoalsData />}</section>
      </main>
    </>
  );
}

export default Analytics;
