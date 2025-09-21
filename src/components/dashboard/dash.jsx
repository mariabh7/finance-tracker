import { Transaction } from "../data/data";
import Card from "../ui/card";
import { getTotal } from "../data/data";

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
    </>
  );
}

export default DashBoard;
