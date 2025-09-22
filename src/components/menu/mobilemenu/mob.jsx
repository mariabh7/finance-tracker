import { menuDeep } from "../../ui/menuIcon";
import { currencyDollar } from "../../ui/dollarIcon";
import { GenUL } from "../menu";
import { useState, useEffect } from "react";
function MobMenu({ active, setActive }) {
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target !== document.querySelector(".mobile") &&
        event.target !== document.querySelector(".icon")
      ) {
        setisOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className=" z-50 h-full w-full py-6 px-3 border-b-[1px] border-b-gray-300 flex flex-col gap-y-6 justify-normal">
      <header className="flex justify-between items-center ">
        <div className="flex justify-items-start gap-2 items-center">
          {currencyDollar()}
          <h1 className="capitalize font-medium text-2xl">finance tracker</h1>
        </div>
        <div
          onClick={() => {
            setisOpen(true);
          }}
        >
          {menuDeep()}
        </div>
      </header>
      <div
        className={`mobile h-fit absolute ${
          isOpen ? "block" : "hidden"
        } top-0  right-0 py-6 px-3 border-l-[1px]  border-l-gray-300 bg-white w-[100%] lg:w-[50%]`}
      >
        <h1 className="capitalize flex gap-2 items-center font-medium text-2xl mb-7">
          {currencyDollar()}browse pages{" "}
        </h1>
        <GenUL active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default MobMenu;
