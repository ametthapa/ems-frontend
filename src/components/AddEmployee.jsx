import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigator = useNavigate();
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    debugger;
    if (validateForm()) {
      const employee = { firstName, lastName, email };
      if (id) {
        updateEmployee(employee, id)
          .then((response) => {
            console.log(response.data);
            navigator("/employee");
          })
          .catch((error) => console.error(error));
      }
      createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigator("/employee");
        })
        .catch((error) => console.error(error));
    }
  };

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorsCopy = { ...errors };
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }
    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (!emailRegex.test(email)) {
      errorsCopy.email = "E-mail is invalid";
      valid = false;
    } else if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "E-mail is required";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          const result = response.data;
          setFirstName(result.firstName);
          setLastName(result.lastName);
          setEmail(result.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  placeholder="Enter E-mail"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
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
