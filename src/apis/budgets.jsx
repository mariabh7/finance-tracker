import { instance } from "../components/data/data";
export const getAllBudgets = async () => {
  const data = await instance({
    url: "/budgets",
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
export const EditBudget = async () => {
  const data = await instance({
    url: "/budgets/:id",
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
