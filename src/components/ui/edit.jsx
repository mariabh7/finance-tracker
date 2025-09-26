import { useState } from "react";
import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import { Availablecategories, Categories, Plans } from "../data/data";
import CloseDiagonale from "./close";
import TextField from "@mui/material/TextField";

export const edit = () => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
      <path d="M16 5l3 3" />
    </svg>
  );
};

function CustimizedSelect({ value, option, role, onChange }) {
  return (
    <Autocomplete
      value={value}
      id="controllable-states-demo"
      onChange={(event, newValue) => onChange(newValue)}
      options={option}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={role} />}
    />
  );
}

function NumberInput({ title, value, onChange }) {
  return (
    <TextField
      label={title}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="number"
      slotProps={{
        inputLabel: true,
        htmlInput: {
          min: 0,
          max: 10000000,
          step: 0.1,
        },
      }}
    />
  );
}

export default function EditBudgetElement({
  action,
  description,
  open = false,
  setOpen,
  actualElement,
}) {
  const [category, setCategory] = useState(actualElement?.item || "");
  const [limit, setLimit] = useState(actualElement?.total || 0);
  const [period, setPeriod] = useState(actualElement?.period || "");
  useEffect(() => {
    setCategory(actualElement?.item || "");
    setLimit(actualElement?.total || 0);
    setPeriod(actualElement?.period || "");
  }, [actualElement]);
  const handleSubmit = () => {
    const updated = {
      ...actualElement,
      item: category,
      total: limit,
      period,
    };
    console.log("Budget updated:", updated);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      slotProps={{
        paper: {
          sx: {
            border: "2px solid white",
            borderRadius: "10px",
            width: { xs: "90%", sm: "500px", lg: "560px" },
            maxWidth: "none",
          },
        },
      }}
    >
      <DialogTitle>
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="capitalize font-Ubuntu">{action}</h1>
            <p className="text-[13px] text-gray-500">{description}</p>
          </div>
          <CloseDiagonale setopen={setOpen} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={{
          width: "100%",
          overflowY: "auto",
          height: "100%",
        }}
      >
        <div className="mt-5 flex flex-col gap-5">
          <CustimizedSelect
            value={category}
            option={Availablecategories}
            role={"Budget Category"}
            onChange={setCategory}
          />
          <NumberInput
            title={"Budget Limit"}
            value={limit}
            onChange={setLimit}
          />
          <CustimizedSelect
            value={period}
            option={Plans}
            role={"Period"}
            onChange={setPeriod}
          />
          <button
            onClick={handleSubmit}
            className="bg-black cursor-pointer p-2 capitalize rounded-lg w-full text-white text-center"
          >
            {action}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function EditTransactions({
  action,
  description,
  open = false,
  setModalOpen,
  actualElement,
}) {
  const [type, setType] = useState(actualElement?.type || "income");
  const [amount, setAmount] = useState(actualElement?.amount || 0);
  const [category, setCategory] = useState(actualElement?.category || "");
  const [desc, setDesc] = useState(actualElement?.description || "");
  useEffect(() => {
    setType(actualElement?.type || "income");
    setAmount(actualElement?.amount || 0);
    setCategory(actualElement?.category || "");
    setDesc(actualElement?.description || "");
  }, [actualElement]);

  const handleSubmit = () => {
    const updated = {
      ...actualElement,
      type,
      amount,
      category,
      date: new Date(),
      description: desc,
    };
    console.log("Transaction updated:", updated);
    setModalOpen(false);
  };

  return (
    <Dialog
      open={open}
      slotProps={{
        paper: {
          sx: {
            border: "2px solid white",
            borderRadius: "10px",
            width: { xs: "90%", sm: "500px", lg: "560px" },
            maxWidth: "none",
          },
        },
      }}
    >
      <DialogTitle>
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="capitalize font-Ubuntu">{action}</h1>
            <p className="text-[13px] text-gray-500">{description}</p>
          </div>
          <CloseDiagonale setopen={setModalOpen} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={{
          width: "100%",
          overflowY: "auto",
          height: "100%",
        }}
      >
        <div className="mt-5 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <CustimizedSelect
              value={type}
              option={["income", "expense"]}
              role={"type"}
              onChange={setType}
            />
            <NumberInput title={"amount"} value={amount} onChange={setAmount} />
          </div>
          <CustimizedSelect
            value={category}
            option={Availablecategories}
            role={"category"}
            onChange={setCategory}
          />
          <TextField
            id="outlined-basic"
            label="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            variant="outlined"
          />
          <button
            onClick={handleSubmit}
            className="bg-black cursor-pointer p-2 capitalize rounded-lg w-full text-white text-center"
          >
            {action}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
