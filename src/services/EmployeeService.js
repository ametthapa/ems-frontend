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

export const getEmployee = async (id) => {
  const data = axios.get(REST_API_BASE_URL + "/" + id);
  return data;
};

export const updateEmployee = async (employee, id) => {
  const data = axios.put(REST_API_BASE_URL + "/" + id, employee);
  return data;
};

export const deleteEmployeeById = async (id) => {
  const data = axios.delete(REST_API_BASE_URL + "/" + id);
  return data;
};
