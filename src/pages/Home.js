import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";

const Home = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    await axios
      .get("http://localhost:3004/posts")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    setTimeout(() => {
      getdata();
    }, 1000);
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row mt-5 m-0">
          <h3 className="col" style={{ textAlign: "left" }}>
            Home
          </h3>

          <div className="col" style={{ textAlign: "right" }}>
            <Add name="Add" />
          </div>
        </div>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td className="d-flex">
                <p>
                  <Edit name = {<i className="fa-solid fa-pen mx-2" style={{ color:'blue' }} />} />     
                </p>

                <p>
                  <i className="fa-solid fa-trash mx-2" style={{ color:'red' }}></i>
                </p>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
