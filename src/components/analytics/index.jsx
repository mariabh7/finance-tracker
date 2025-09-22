import { LineChart } from "@mui/x-charts";
import Card from "../ui/card";
import HeadingContent from "../ui/CardHeader";
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
      <main className="grid grid-cols-1 md:grid-cols-2">
        <FinancialMonthsOverview />
      </main>
    </>
  );
}

export default Analytics;
