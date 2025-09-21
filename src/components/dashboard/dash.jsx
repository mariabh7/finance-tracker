import { Transaction } from "../data/data";
import Card from "../ui/card";
import { Categories } from "../data/data";
import { getTotal } from "../data/data";
import ProgressBar from "../ui/Progress";

function ItemToSHow({ CurrentItem }) {
  const Percentage =
    CurrentItem?.paid > CurrentItem?.total
      ? 100
      : ((CurrentItem?.paid * 100) / CurrentItem?.total).toFixed(1);
  return (
    <li className="w-full ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-0 w-[100%] ">
          <h1 className="capitalize text-base md:text-lg font-medium">
            {CurrentItem.item}
          </h1>
          <p className="capitalize text-gray-400 text-[14px] md:text-base ">
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
    <div className="OuterStyle">
      <div className="flex flex-col gap-1 w-[50%] ">
        <h1 className="capitalize text-lg font-medium">budget progress </h1>
        <p className="TextP first-letter:uppercase">
          track your spending against your budget{" "}
        </p>
      </div>
      <ul className="flex flex-col mt-10 gap-6">
        {Categories?.map((Category) => (
          <ItemToSHow key={Category.itemId} CurrentItem={Category} />
        ))}
      </ul>
    </div>
  );
}
function DashBoard() {
  const TotalIncome = getTotal(Transaction, "income");
  const TotalExpenses = getTotal(Transaction, "expense");
  return (
    <>
      <header
        data-slot="dashboard-header"
        className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
      <main>
        <BudgetView />
      </main>
    </>
  );
}

export default DashBoard;
