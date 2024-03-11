import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();
  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(employee);
    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator("/employee");
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  placeholder="Enter E-mail"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
