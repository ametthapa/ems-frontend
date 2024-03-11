import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployeeById } from "../services/EmployeeService";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();
  const getAllEmployee = () => {
    listEmployees()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getAllEmployee();
  }, [getAllEmployee]);
  const addNewEmployee = () => {
    navigator("/employee/addEmployee");
  };

  const updateEmployee = (id) => {
    navigator(`/employee/updateEmployee/${id}`);
  };
  const deleteEmployee = (id) => {
    deleteEmployeeById(id).then((response) => {
      console.log(response);
      navigator("/employee");
    });
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((data, index) => (
            <tr key={index + 1}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => updateEmployee(data.id)}
                >
                  Update
                </button>{" "}
                {" / "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
