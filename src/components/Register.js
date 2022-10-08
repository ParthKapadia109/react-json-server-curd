import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [usrAuth, setUsrAuth] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    mobile: "",
    password: "",
  });

  //   console.log(data);

  const handleChange = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value, name);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data) {
      localStorage.setItem("usersignup", JSON.stringify([...usrAuth, data]));
      console.log("User Register successfully");
      navigate("/login");
    }
  };

  return (
    <div className="container mt-3">
      <section className="d-flex row mt-5">
        <div className="col"></div>
        <div className="col">
          <h3 className="text-center ">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                type="Date"
                name="date"
                onChange={handleChange}
                placeholder="Date"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                type="number"
                name="mobile"
                onChange={handleChange}
                placeholder="Mobile No"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} type="submit">
              Submit
            </Button>
            <p className="mt-3">
              Already have a account
              <span>
                <NavLink to="/login" className="text-decoration-none">
                  Sign in
                </NavLink>
              </span>
            </p>
          </Form>
        </div>
        <div className="col"></div>
      </section>
    </div>
  );
};

export default Register;
