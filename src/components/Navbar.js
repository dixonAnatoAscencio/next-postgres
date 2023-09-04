import { useContext } from "react";
import WishContext from "@/context/wishListContext";

const Navbar = () => {
  const { list } = useContext(WishContext);
  return (
    <div className="p-3 flex justify-between border-2 border-yellow-400 mx-auto">
      <h3 className="font-bold">NextJS+PostgresSQL</h3>
      <span>Total Tareas: {list.length}</span>
      
    </div>
  );
};
export default Navbar;
