import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Categories } from "./components/data/data.jsx";
import Navigation from "./components/menu/menu.jsx";
export const CategoriesData = createContext();
import { instance } from "./components/data/data.jsx";
import { configDotenv } from "dotenv";
const getData = async () => {
  const data = await instance({
    url: "/budgets",
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data;
};
export default function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      getData().then(
        (res) => {
          let budgets = res?.data?.data;
          setCategories(budgets);
        },
        [categories],
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className=" relative h-full flex flex-col lg:flex-row gap-5">
      <Navigation />
      <div className="py-5 mb-5 lg:mb-0 lg:py-10 w-full px-5 h-screen lg:overflow-y-scroll flex flex-col justify-start gap-10">
        <CategoriesData.Provider value={categories}>
          <Outlet />
        </CategoriesData.Provider>
      </div>
    </div>
  );
}
