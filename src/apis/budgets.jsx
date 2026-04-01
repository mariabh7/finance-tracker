import { instance } from "../components/data/data";
export const getAllBudgets = async () => {
  const data = await instance({
    url: "/budgets",
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
export const EditBudget = async (id, dataIn) => {
  const data = await instance({
    method: "put",
    data: dataIn,
    url: `/budgets/${id}`,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
