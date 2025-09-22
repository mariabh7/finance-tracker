import { Transaction } from "../data/data";
import Card from "../ui/card";
import { Categories } from "../data/data";
import { getTotal } from "../data/data";
import ProgressBar from "../ui/Progress";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts";
import HeadingContent from "../ui/CardHeader";
function BasicChart() {
  return (
    <div className="OuterStyle flex flex-col gap-5">
      <HeadingContent
        title={"icome vs expenses"}
        description={"monthly comparison over the last 6 months"}
      />
      <BarChart
        xAxis={[{ data: ["january", "february", "march", "april", "may"] }]}
        series={[
          { data: [400, 600, 4500, 3000, 300] },
          { data: [900, 4000, 30, 3999, 2000] },
        ]}
        height={300}
      />
    </div>
  );
}
export function BasicPie() {
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
            data: Categories.map((item) => ({
              id: item.itemId,
              value: item.paid,
              label: item.item,
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
function VisualReview() {
  return (
    <section className="grid  gap-5 grid-cols-1 md:grid-cols-2">
      <BasicChart />
      <BasicPie />
    </section>
  );
}
function ItemToSHow({ CurrentItem }) {
  const Percentage =
    CurrentItem?.paid > CurrentItem?.total
      ? 100
      : ((CurrentItem?.paid * 100) / CurrentItem?.total).toFixed(1);
  return (
    <li className="w-full ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-0 w-[100%] ">
          <h1 className="capitalize text-base  font-medium">
            {CurrentItem.item}
          </h1>
          <p className="capitalize text-gray-400 text-[13px] md:text-base ">
            ${CurrentItem.paid} / ${CurrentItem.total}
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
function BudgetView() {
  return (
    <section className="OuterStyle">
      <HeadingContent
        title={"budget progress"}
        description={" track your spending against your budget"}
      />
      <ul className="flex flex-col mt-10 gap-6">
        {Categories?.map((Category) => (
          <ItemToSHow key={Category.itemId} CurrentItem={Category} />
        ))}
      </ul>
    </section>
  );
}
function DashBoard() {
  const TotalIncome = getTotal(Transaction, "income");
  const TotalExpenses = getTotal(Transaction, "expense");
  return (
    <>
      <header
        data-slot="dashboard-header"
        className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Card
          title={"total income"}
          number={TotalIncome}
          description={"+12% from last month"}
        />
        <Card
          title={"total expense"}
          number={TotalExpenses}
          description={"-8% from last month"}
        />
        <Card
          title={"net savings"}
          number={TotalIncome - TotalExpenses}
          description={"24.0% saving rate"}
        />
        <Card
          title={"budget status"}
          number={76}
          description={"of monthly budget used"}
        />
      </header>
      <main className="flex flex-col gap-10 mb-4 lg:mb-0 ">
        <VisualReview />
        <BudgetView />
      </main>
    </>
  );
}

export default DashBoard;
