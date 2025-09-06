import { NavItems } from "../menu";
function DeskMenu() {
  return (
    <>
      <ul>
        {NavItems.map((item) => (
          <li key={item.id}>
            {item.item}
            {item.icon()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DeskMenu;
