import React from "react";
import TextField from "@mui/material/TextField";
const settings = () => {
  return (
    <div>
      <div className="flex flex-col  gap-1 w-[100%] ">
        <h1 className="capitalize text-3xl font-medium">settings</h1>
        <p className="TextP first-letter:uppercase">
          settings and options for your finances
        </p>
      </div>
      <div className=" mt-10 md:mt-20 flex flex-col  w-full md:w-[60%] lg:w-[40%] gap-6">
        <TextField
          // sx={{ width: "40%" }}
          value={"Maria"}
          label={"Name"}
          slotProps={{ readOnly: true }}
        />
        <TextField
          // sx={{ width: "40%" }}
          value={"email@gmail.com"}
          label={"Email"}
          slotProps={{ readOnly: true }}
        />
        <TextField
          // sx={{ width: "40%" }}
          value={"software engineer"}
          label={"Your job"}
          slotProps={{ readOnly: true }}
        />
      </div>
    </div>
  );
};

export default settings;
