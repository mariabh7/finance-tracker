import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import { Availablecategories, Categories } from "../data/data";
import CloseDiagonale from "./close";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Plans } from "../data/data";
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
function CustimizedSelect({ value, option, role }) {
  const [current, setCurrent] = useState(value);
  return (
    <Autocomplete
      value={current}
      id="controllable-states-demo"
      onChange={(event, newValue) => {
        setCurrent(newValue);
      }}
      options={option}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={role} />}
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
  return (
    <Dialog open={open}>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <h1 className="capitalize font-Ubuntu">{action}</h1>
          <CloseDiagonale setopen={setOpen} />
        </div>
      </DialogTitle>
      <DialogContent
        sx={{
          width: "560px",
          overflowX: "hidden",
          height: "500px",
        }}
      >
        <div className="mt-5">
          <CustimizedSelect
            value={actualElement?.item}
            option={Availablecategories}
            role={"Budget Category"}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
