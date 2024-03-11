import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employee";

export const listEmployees = async () => {
  const data = await axios.get(REST_API_BASE_URL);
  return data;
};

export const createEmployee = async (employee) => {
  const data = axios.post(REST_API_BASE_URL, employee);
  return data;
};
