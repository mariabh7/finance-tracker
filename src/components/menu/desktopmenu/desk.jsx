import { GenUL } from "../menu";
import { currencyDollar } from "../../ui/dollarIcon";
function DeskMenu() {
  return (
    <aside className="overflow-y-scroll   h-screen w-[25%] py-10 px-6 border-r-[1px] border-r-gray-300 flex flex-col gap-y-6 justify-normal">
      <div>
        <div className="flex justify-items-start gap-2 items-center">
          {currencyDollar()}
          <h1 className="capitalize font-medium text-2xl">finance tracker</h1>
        </div>
      </div>
      <GenUL />
    </aside>
  );
}

export default DeskMenu;
