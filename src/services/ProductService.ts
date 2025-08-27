import { axiosInstance } from "../utils/axios";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/products");

  return response.data;
};

export const getSingleProduct = async (id: number) => {
  const response = await axiosInstance.get(`/products/${id}`);

  return response.data;
};
