import { Transaction } from "../data/data";
import Card from "../ui/card";
import { getTotal } from "../data/data";
import ProgressBar from "../ui/Progress";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts";
import {
  CategoriesData,
  MonthlyData,
  MonthlyStatistics,
  TransactionsData,
} from "../../App";
import HeadingContent from "../ui/CardHeader";
import { useContext } from "react";
function BasicChart() {
  return (
    <div className="OuterStyle flex flex-col gap-5">
      <HeadingContent
        title={"icome vs expenses"}
        description={"monthly comparison over the last 6 months"}
      />
      <BarChart
        xAxis={[{ data: ["january"] }]}
        series={[{ data: [400] }, { data: [900] }]}
        height={300}
      />
    </div>
  );
}
export function BasicPie({ data }) {
  return (
    <div className="OuterStyle flex flex-col gap-5">
      <HeadingContent
        title={"Expense categories"}
        description={"current month breakdown"}
      />
      <PieChart
        hideLegend={true}
        series={[
          {
            data: data.map((item) => ({
              id: item.id,
              value: item.Amount,
              label: item.Category,
            })),
          },
        ]}
        animation={{ duration: 800 }}
        width={250}
        height={300}
      />
    </div>
  );
}
function VisualReview({ data }) {
  return (
    <section className="grid  gap-5 grid-cols-1 md:grid-cols-2">
      <BasicChart />
      <BasicPie data={data} />
    </section>
  );
}
function ItemToSHow({ CurrentItem }) {
  const Percentage =
    CurrentItem?.UsedAmount > CurrentItem?.Limit
      ? 100
      : ((CurrentItem?.UsedAmount * 100) / CurrentItem?.Limit).toFixed(1);
  return (
    <li className="w-full ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-0 w-[100%] ">
          <h1 className="capitalize text-base  font-medium">
            {CurrentItem.Category}
          </h1>
          <p className="capitalize text-gray-400 text-[13px] md:text-base ">
            ${CurrentItem.UsedAmount} / ${CurrentItem.Limit}
          </p>
        </div>
      </div>
      <div className="flex mt-1 flex-col gap-2 justify-start">
        <ProgressBar progress={Percentage} />
        <span className="text-gray-400 text-[14px] self-end">
          {Percentage}% used
        </span>
      </div>
    </li>
  );
}
function BudgetView({ data }) {
  return (
    <section className="OuterStyle">
      <HeadingContent
        title={"budget progress"}
        description={" track your spending against your budget"}
      />
      <ul className="flex flex-col mt-10 gap-6">
        {data?.map((Category) => (
          <ItemToSHow key={Category.id} CurrentItem={Category} />
        ))}
      </ul>
    </section>
  );
}
function DashBoard() {
  const Categories = useContext(CategoriesData);
  const transactions = useContext(TransactionsData);
  const monthlydata = useContext(MonthlyData);
  const monthlystats = useContext(MonthlyStatistics);
  const ExpenseCategories = transactions?.filter(
    (item) => item.Type === "EXPENSE",
  );
  const {
    cureentIncome,
    currentMonth,
    currentExpense,
    currentSavings,
    previousSavings,
    percentageChange,
  } = monthlystats;
  return (
    <>
      <header
        data-slot="dashboard-header"
        className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Card
          title={"total income"}
          number={cureentIncome}
          description={`${percentageChange} from last month`}
        />
        <Card
          title={"total expense"}
          number={currentExpense}
          description={"-8% from last month"}
        />
        <Card
          title={"net savings"}
          number={currentSavings}
          description={"24.0% saving rate"}
        />
        <Card
          title={"budget status"}
          number={76}
          description={"of monthly budget used"}
        />
      </header>
      <main className="flex flex-col gap-10 mb-4 lg:mb-0 ">
        <VisualReview data={ExpenseCategories} />
        <BudgetView data={Categories} />
      </main>
    </>
  );
}

export default DashBoard;
