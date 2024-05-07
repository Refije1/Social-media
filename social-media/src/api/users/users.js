import { axiosInstance } from "../config";
import { BASE_URL } from "../config";

export const getUsers = async () => {
    const { data } = await axiosInstance.get(
      `${BASE_URL}/users`
    );
  
    return data;
  };