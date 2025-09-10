import React from "react";

export const x = () => {
  return (
    //     <!--
    // tags: [cancel, remove, delete, empty, close]
    // version: "1.0"
    // unicode: "eb55"
    // -->
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
export default function CloseDiagonale({ open, setopen }) {
  function closediagonale() {
    setopen(false);
  }
  return (
    <>
      <button
        onClick={() => {
          closediagonale();
        }}
      >
        {x()}
      </button>
    </>
  );
}
