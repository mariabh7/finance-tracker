import { instance } from "../components/data/data";
const getAllTrs = async () => {
  const data = await instance({
    url: "/transactions",
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
const addTr = async (dataIn) => {
  const data = await instance({
    method: "POST",
    data: dataIn,
    url: `/transactions`,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
const editTr = async (id, dataIn) => {
  const data = await instance({
    method: "put",
    data: dataIn,
    url: `/transactions/${id}`,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
  return data?.data;
};
const deleteTr = async (id) => {
  const data = await instance({
    method: "DELETE",
    url: `/transactions/${id}`,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TEST_TOKEN}` },
  });
};
export { getAllTrs, deleteTr, addTr, editTr };
