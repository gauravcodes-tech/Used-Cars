import API from "./api";

export const getAllCars = async () => {
  const res = await API.get("/cars");
  return res.data.data;
};

export const getCar = async (id) => {
  const res = await API.get(`/cars/${id}`);
  return res.data.data;
};

export const addCar = async (data) => {
  const res = await API.post("/cars", data);
  return res.data;
};

export const updateCar = async (id, data) => {
  const res = await API.put(`/cars/${id}`, data);
  return res.data;
};

export const deleteCar = async (id) => {
  const res = await API.delete(`/cars/${id}`);
  return res.data;
};

export const getDashboard = async () => {
  const res = await API.get("/cars/dashboard");
  return res.data.data;
};