import { instance } from "../components/data/data";
const getAllTrs = async () => {
  const data = await instance({
    url: "/transactions",
  });
  return data?.data;
};
const addTr = async (dataIn) => {
  const data = await instance({
    method: "POST",
    data: dataIn,
    url: `/transactions`,
  });
  return data?.data;
};
const editTr = async (id, dataIn) => {
  const data = await instance({
    method: "put",
    data: dataIn,
    url: `/transactions/${id}`,
  });
  return data?.data;
};
const deleteTr = async (id) => {
  const data = await instance({
    method: "DELETE",
    url: `/transactions/${id}`,
  });
};
export { getAllTrs, deleteTr, addTr, editTr };
