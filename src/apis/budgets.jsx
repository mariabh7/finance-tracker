import { instance } from "../components/data/data";
const getAllBudgets = async () => {
  const data = await instance({
    url: "/budgets",
  });
  return data?.data;
};
const addBudget = async (dataIn) => {
  const data = await instance({
    method: "POST",
    data: dataIn,
    url: `/budgets`,
  });
  return data?.data;
};
const EditBudget = async (id, dataIn) => {
  const data = await instance({
    method: "put",
    data: dataIn,
    url: `/budgets/${id}`,
  });
  return data?.data;
};
const deleteBudget = async (id) => {
  const data = await instance({
    method: "DELETE",
    url: `/budgets/${id}`,
  });
};
export { getAllBudgets, EditBudget, deleteBudget, addBudget };
