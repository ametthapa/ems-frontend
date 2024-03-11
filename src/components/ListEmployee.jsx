import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const addNewEmployee = () => {
    navigator("/employee/addEmployee");
  };
  return (
    <div className="container">
      <h2 className="text-center">Employee List</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Emlpoyee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Name</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((data, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
