import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [usrData, setUsrData] = useState({});
  // console.log("usrData", id);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsrData({ ...usrData, [name]: value });
  };

  useEffect(() => {
    loadUsr();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3004/posts", usrData)
      .then((res) => {
        console.log(res.data);
        navigate("/details");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadUsr = async () => {
    await axios
      .get(`http://localhost:3004/posts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavLink to="#" role="button" onClick={handleShow}>
        {props.name}
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                type="number"
                name="mobile"
                onChange={handleChange}
                placeholder="Enter your number"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
