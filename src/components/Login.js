import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [usrAuth, setUsrAuth] = useState([]);
  //   console.log(data);

  const handleChange = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    console.log(value, name);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUsr = localStorage.getItem("usersignup");
    // console.log("getUsr", getUsr);

    const { email, password } = data;

    if (getUsr && getUsr.length) {
      const userData = JSON.parse(getUsr);
      const usrLogin = userData.filter((el, key) => {
        return el.email === email && el.password === password;
      });
      console.log(usrLogin);
      if (usrLogin.length === 0) {
        alert("Invalid Details");
      } else {
        // console.log("login successfully");
        localStorage.setItem("usrLogin", JSON.stringify(usrLogin));
        setTimeout(() => {
          navigate("/details");
        }, 1000);
      }
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex row mt-5">
          <div className="col"></div>
          <div className="col">
            <h3 className="text-center">Login</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
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
                Don't have a account to
                <span>
                  <NavLink to="/" className="text-decoration-none">
                    Sign up
                  </NavLink>
                </span>
              </p>
            </Form>
          </div>
          <div className="col"></div>
        </section>
      </div>
    </div>
  );
};

export default Login;
