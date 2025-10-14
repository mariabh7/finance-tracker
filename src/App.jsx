import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Categories } from "./components/data/data.jsx";
import Navigation from "./components/menu/menu.jsx";
export const CategoriesData = createContext();
async function data() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Categories);
    }, 5000);
  });
}
export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    data().then((val) => {
      setCategories(val);
    });
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
