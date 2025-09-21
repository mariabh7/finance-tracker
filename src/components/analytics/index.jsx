import Card from "../ui/card";
function Analytics() {
  return (
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
          title={"total expense"}
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
    </>
  );
}

export default Analytics;
