import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import { Availablecategories } from "../data/data";
import CloseDiagonale from "./close";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Plans } from "../data/data";
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
  const [category, setCategory] = useState(actualElement?.item);
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
          width: "800px",
          overflowX: "hidden",
          height: "500px",
        }}
      >
        <FormControl
          sx={{
            width: "400px",
            marginTop: "20px",
            flexDirection: "column",
            display: "flex",
            gap: "2rem",
          }}
        >
          <div>
            <InputLabel>Category</InputLabel>
            <Select
              value={category ? category : "no"} // 👈 current value
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              {Availablecategories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </div>

          <Select
            value={category ? category : "no"} // 👈 current value
            onChange={(e) => setCategory(e.target.value)}
            label="budget limit"
          >
            {Plans.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}
