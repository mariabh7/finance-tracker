import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/menu/menu.jsx";
export const CategoriesData = createContext();
export const TransactionsData = createContext();
import { getAllBudgets } from "./apis/budgets.jsx";
import { getAllTrs } from "./apis/trans.jsx";
export default function App() {
  const [categories, setCategories] = useState([]);
  const [transactions, settransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllBudgets();
        const res2 = await getAllTrs();
        setCategories(res?.data);
        settransactions(res2?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" relative h-full flex flex-col lg:flex-row gap-5">
      <Navigation />
      <div className="py-5 mb-5 lg:mb-0 lg:py-10 w-full px-5 h-screen lg:overflow-y-scroll flex flex-col justify-start gap-10">
        <CategoriesData.Provider value={categories}>
          <TransactionsData.Provider value={transactions}>
            {" "}
            <Outlet />
          </TransactionsData.Provider>
        </CategoriesData.Provider>
      </div>
    </div>
  );
}
