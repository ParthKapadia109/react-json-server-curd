import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);

  const User = () => {
    const getUsr = localStorage.getItem("usrLogin");

    if (getUsr && getUsr.length) {
      const Usr = JSON.parse(getUsr);
      // console.log("getUsrrrr", Usr);
      setLoginData(Usr);
    }
  };

  useEffect(() => {
    User();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usrLogin");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            {loginData && loginData.length ? (
              // <a class="btn btn-primary" href="#" role="button">Link</a>

              <Nav.Link active onClick={handleLogout} href="#">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link active href="/login">
                Login
              </Nav.Link>
            )}

            {loginData.map((item, key) => {
              // console.log("item", item);
              return (
                <Nav.Link active disabled aria-readonly>
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
