import { menuDeep } from "../../ui/menuIcon";
import { currencyDollar } from "../../ui/dollarIcon";
import { GenUL } from "../menu";
function MobMenu({ active, setActive }) {
  return (
    <div className="relative z-50 h-full w-full py-6 px-3 border-b-[1px] border-b-gray-300 flex flex-col gap-y-6 justify-normal">
      <header className="flex justify-between items-center ">
        <div className="flex justify-items-start gap-2 items-center">
          {currencyDollar()}
          <h1 className="capitalize font-medium text-2xl">finance tracker</h1>
        </div>
        <div>{menuDeep()}</div>
      </header>
      <div className="absolute hidden top-0 right-0 py-6 px-3 border-l-[1px] border-l-gray-300 bg-white w-[65%] md:w-[50%]">
        <GenUL active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default MobMenu;
