import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import { Availablecategories } from "../data/data";
import CloseDiagonale from "./close";
export const edit = () => {
  return (
    //     <!--
    // category: Design
    // tags: [pencil, change, update]
    // version: "1.0"
    // unicode: "ea98"
    // -->
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
function CustimizedSelect({ optien }) {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
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
      <DialogTitle>{action}</DialogTitle>
      <DialogContent>
        <div>
          <p>{description}</p>
          <div>
            <p>hello world {actualElement?.item}</p>
            <CloseDiagonale setopen={setOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
