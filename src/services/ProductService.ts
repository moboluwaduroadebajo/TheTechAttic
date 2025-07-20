import { axiosInstance } from "../utils/axios";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/products");

  return response.data;
};
