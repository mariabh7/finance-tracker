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
      <div className=" mt-10 md:mt-20 flex flex-col  gap-1 w-[100%] ">
        <h2 className="capitalize text-xl font-medium">
          personel informations :
        </h2>
        <p className="TextP first-letter:uppercase">
          your personal informations
        </p>
      </div>
      <div className=" mt-10 grid grid-cols-2 w-full gap-6">
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
        <TextField
          // sx={{ width: "40%" }}
          value={"24/7/2024"}
          label={"Date of birth"}
          slotProps={{ readOnly: true }}
        />
        <TextField
          // sx={{ width: "40%" }}
          value={"algeriar"}
          label={"country"}
          slotProps={{ readOnly: true }}
        />
      </div>
    </div>
  );
};

export default settings;
