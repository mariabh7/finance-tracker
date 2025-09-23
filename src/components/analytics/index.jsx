import { LineChart } from "@mui/x-charts";
import Card from "../ui/card";
import ProgressBar from "../ui/Progress";
import { useState } from "react";
import HeadingContent from "../ui/CardHeader";
function SavingsOverview() {
  const monthlysaving = [
    { month: "Jan", savings: 4000 },
    { month: "Feb", savings: 3000 },
    { month: "Mar", savings: 5000 },
    { month: "Apr", savings: 4500 },
    { month: "May", savings: 3800 },
    { month: "Jun", savings: 4200 },
  ];
  return (
    <div>
      <div className="OuterStyle">
        <HeadingContent
          title={"savings goals progress"}
          description={"track your progress towards your savings target"}
        />
        <div>
          <div className="flex gap-2 flex-col ">
            <h2 className="text-4xl text-blue-500 font-medium">$3500</h2>
            <span className="text-gray-500">of $5000</span>
          </div>
          <div>
            <div>
              <label>progress</label>
              <span>50%</span>
            </div>
            <ProgressBar progress={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
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
      <main className="flex flex-col gap-5">
        <div className="flex w-fit  capitalize justify-start gap-5 bg-gray-200  px-3 rounded-4xl">
          {Gen.map((cat) => {
            return (
              <button
                onClick={() => {
                  setSee(cat);
                }}
                className={`capitalize my-2 py-1 px-5 rounded-full cursor-pointer text-base ${
                  see === cat ? "bg-white" : "bg-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2">
          {see === "trends" ? <FinancialMonthsOverview /> : <SavingsOverview />}
        </section>
      </main>
    </>
  );
}

export default Analytics;
