import Card from "../ui/card";
function Transactions() {
  return (
    <div>
      <header
        data-slot="transaction-header"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card title={"income"} number={4200} description={null} />
        <Card title={"expense"} number={1300} description={null} />
        <Card title={"total balence"} number={4200} description={null} />
      </header>
    </div>
  );
}

export default Transactions;
