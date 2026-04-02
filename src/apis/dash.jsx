import { instance } from "../components/data/data";
const getIncomesAndExpenses = async () => {
  const data = await instance({
    method: "GET",
    url: `/monthly-data`,
  });
  return data?.data;
};
