import React from "react";

const settings = () => {
  return (
    <div>
      <div className="flex flex-col  gap-1 w-[100%] ">
        <h1 className="capitalize text-3xl font-medium">settings</h1>
        <p className="TextP first-letter:uppercase">
          settings and options for your finances
        </p>
      </div>
      <div className="mt-20">
        <TextField
          sx={{ background: "gray" }}
          value={"email@gmail.com"}
          label={"Email"}
          slotProps={{ readOnly: true }}
        />
      </div>
    </div>
  );
};

export default settings;
