import Card from "../ui/card";
import { edit } from "../ui/edit";
import { trash } from "../ui/remove";
import { plus } from "../ui/addIcon";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import { Transaction } from "../data/data";
import { circleArrowUp } from "../ui/arrowup";
import { circleArrowDown } from "../ui/arrowdown";
import { getTotal } from "../data/data";
import { useContext, useReducer, useState } from "react";
import { TransactionsData, MonthlyStatistics } from "../../App";
import { deleteTr } from "../../apis/trans";
import { EditTransactions } from "../ui/edit";
function TransactionsTable({ data, setopen, Transdispatch }) {
  const handleEditting = (item) => {
    Transdispatch({
      type: "edit transaction ",
      item: item,
    });
    setopen(true);
  };
  return (
    <>
      <TableContainer sx={{ width: "100%" }}>
        <Table>
          <TableHead sx={{ width: "100%" }}>
            <TableRow className="capitalize" sx={{ fontWeight: "700" }}>
              <TableCell>type</TableCell>
              <TableCell>amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>description</TableCell>
              <TableCell>date</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "100%" }}>
            {data?.map((trans) => {
              const CurrentType = trans.Type === "INCOME" ? true : false;
              const DateofTr = new Date(trans?.Date);
              return (
                <TableRow key={trans.id} className="capitalize">
                  <TableCell>
                    <div
                      className={`flex gap-2 rounded-sm w-fit items-center py-1 px-2 text-white justify-start ${
                        CurrentType ? "bg-black" : "bg-red-700"
                      }`}
                    >
                      {CurrentType ? circleArrowUp() : circleArrowDown()}
                      {trans.Type}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        CurrentType ? "text-green-700" : "text-red-600"
                      }
                    >
                      ${trans.Amount}
                    </span>
                  </TableCell>
                  <TableCell>{trans.Category}</TableCell>
                  <TableCell>{trans.Description}</TableCell>
                  <TableCell>{`${DateofTr.getFullYear()}-${String(DateofTr.getMonth() + 1).padStart(2, "0")}-${String(DateofTr.getDate())}`}</TableCell>
                  <TableCell>
                    {" "}
                    <div className="flex gap-2 justify-start">
                      <button
                        onClick={() => {
                          handleEditting(trans);
                        }}
                        className="Buttons"
                      >
                        {edit()}
                      </button>
                      <button
                        onClick={() => {
                          deleteTr(trans.id);
                        }}
                        className="Buttons"
                      >
                        {trash()}
                      </button>
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
function configer(e, action) {
  if (action.type == "add") {
    console.log(action.type);
    return {
      action: "add transaction",
      description: "add a new income or expense transaction",
      item: action.item ?? {},
    };
  } else {
    console.log(action.type);
    return {
      action: "edit transaction",
      description: "add a new income or expense transaction",
      item: action.item,
    };
  }
}
function MainContainer() {
  const [open, setOpens] = useState(false);
  const transactions = useContext(TransactionsData);
  const initialState = {
    action: "",
    description: "",
    item: {},
  };
  const [TransConfig, dispatch] = useReducer(configer, initialState);
  // const [TransConfig, setTransConfig] = useState({
  //   action: "",
  //   description: "",
  //   item: {},
  // });
  const handleAddingTransaction = () => {
    dispatch({
      type: "add",
      item: {},
    });
    setOpens(true);
  };
  return (
    <main className="OuterStyle flex  flex-col justify-start gap-6 md:gap-10">
      <div className="flex justify-between items-center align-baseline ">
        <div className="space-y-1.5 w-[50%] ">
          <h1 className="capitalize text-lg font-medium">transactions </h1>
          <p className="TextP first-letter:uppercase">
            manage your income and expenses{" "}
          </p>
        </div>
        <div>
          <button
            onClick={handleAddingTransaction}
            className="border-2  h-fit flex items-center justify-start gap-1 px-3 py-2 border-black bg-black rounded-lg text-white capitalize"
          >
            {plus()} add transaction
          </button>
        </div>
      </div>
      <section>
        <TransactionsTable
          data={transactions}
          setopen={setOpens}
          Transdispatch={dispatch}
        />
        <EditTransactions
          action={TransConfig.action}
          description={TransConfig.description}
          open={open}
          setModalOpen={setOpens}
          actualElement={TransConfig.item}
        />
      </section>
    </main>
  );
}
function Transactions() {
  const monthlystats = useContext(MonthlyStatistics);
  const { cureentIncome, currentExpense, currentSavings } = monthlystats;
  return (
    <>
      <header
        data-slot="transaction-header"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card
          title={"total income"}
          number={cureentIncome || 0}
          description={null}
        />
        <Card
          title={"total expense"}
          number={currentExpense || 0}
          description={null}
        />
        <Card
          title={"total balence"}
          number={currentSavings || 0}
          description={null}
        />
      </header>
      <MainContainer />
    </>
  );
}

export default Transactions;
