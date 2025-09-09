import Card from "../ui/card";
import { edit } from "../ui/edit";
import { trash } from "../ui/remove";
import { plus } from "../ui/addIcon";
import TableBody, { tableBodyClasses } from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import { Transaction } from "../data/data";
function TransactionsTable() {
  return (
    <>
      <TableContainer sx={{ width: "100%" }}>
        <Table>
          <TableHead sx={{ width: "100%" }}>
            <TableRow className="capitalize" sx={{ fontWeight: "500" }}>
              <TableCell>type</TableCell>
              <TableCell>amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>description</TableCell>
              <TableCell>date</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "100%" }}>
            {Transaction.map((trans) => {
              return (
                <TableRow key={trans.id} className="capitalize">
                  <TableCell>{trans.type}</TableCell>
                  <TableCell>${trans.amount}</TableCell>
                  <TableCell>{trans.category}</TableCell>
                  <TableCell>{trans.description}</TableCell>
                  <TableCell>{trans.date}</TableCell>
                  <TableCell>
                    {" "}
                    <div className="flex gap-2 justify-start">
                      <button className="Buttons">{edit()}</button>
                      <button className="Buttons">{trash()}</button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
function MainContainer() {
  return (
    <main className="OuterStyle flex flex-col justify-start gap-6 md:gap-10">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-1 w-[50%] ">
          <h1 className="capitalize text-lg font-medium">transactions </h1>
          <p className="TextP first-letter:uppercase">
            manage your income and expenses{" "}
          </p>
        </div>
        <div>
          <button className="border-2  h-fit flex items-center justify-start gap-1 px-3 py-2 border-black bg-black rounded-lg text-white capitalize">
            {plus()} add transaction
          </button>
        </div>
      </div>
      <section>
        <TransactionsTable />
      </section>
    </main>
  );
}
function Transactions() {
  return (
    <>
      <header
        data-slot="transaction-header"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card title={"income"} number={4200} description={null} />
        <Card title={"expense"} number={1300} description={null} />
        <Card title={"total balence"} number={4200} description={null} />
      </header>
      <MainContainer />
    </>
  );
}

export default Transactions;
