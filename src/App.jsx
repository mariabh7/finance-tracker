import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/menu/menu.jsx";
import { useNavigate } from "react-router-dom";
export const CategoriesData = createContext();
export const TransactionsData = createContext();
export const MonthlyData = createContext();
export const MonthlyStatistics = createContext();
import { getAllBudgets } from "./apis/budgets.jsx";
import { getAllTrs } from "./apis/trans.jsx";
import { getIncomesAndExpenses, getStatistics } from "./apis/monthlyData.jsx";
export default function App() {
  const [categories, setCategories] = useState([]);
  const [transactions, settransactions] = useState([]);
  const [monthlyData, setmonthlyData] = useState([]);
  const [monthlyStatsData, setmonthlyStatsData] = useState([]);
  const [accessToken, setAccessToken] = useState(null); // store access token in memory
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Budgets = await getAllBudgets();
        const transactions = await getAllTrs();
        const IncomesAndExpenses = await getIncomesAndExpenses();
        const stats = await getStatistics();
        setCategories(Budgets?.data);
        settransactions(transactions?.data);
        setmonthlyData(IncomesAndExpenses?.data);
        setmonthlyStatsData(stats?.data);
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
            <MonthlyData.Provider value={monthlyData}>
              <MonthlyStatistics.Provider value={monthlyStatsData}>
                {" "}
                <Outlet />
              </MonthlyStatistics.Provider>{" "}
            </MonthlyData.Provider>{" "}
          </TransactionsData.Provider>
        </CategoriesData.Provider>
      </div>
    </div>
  );
}
