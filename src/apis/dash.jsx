import { instance } from "../components/data/data";
const getIncomesAndExpenses = async () => {
  const data = await instance({
    method: "GET",
    url: `/monthly-data`,
  });
  return data?.data;
};
// current month stats
const getStatistics = async () => {
  const data = await instance({
    method: "GET",
    url: `monthly-data/statistics`,
  });
  return data?.data;
};
export { getIncomesAndExpenses, getStatistics };
