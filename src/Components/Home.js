import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-dark">
      <div className="container bg-dark">
        <div
          className="main_info"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <h1
            className="text-white fs-4 "
            style={{ fontFamily: "initial", marginTop: "20px" }}
          >
            WELCOME TO DIVINE SCHOOL
          </h1>
          <Link to={"/student"}>
            {" "}
            <button className="btn btn-outline-light">STUDENT DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
