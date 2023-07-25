import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function CreateStudent() {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    roll: "",
    place: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.id,e.target.value)
    setStudent((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (student.name === "") {
      toast.error("Enter your name");
      return;
    } else if (student.name.length < 3) {
      toast.error("Enter Atleast 4 words", "");
      return;
    }
    if (student.roll === "") {
      toast.error("Enter your roll", "");
      return;
    }
    if (student.age === "") {
      toast.error("Enter your age", "");
      return;
    }
    if (student.place === "") {
      toast.error("Enter your place", "");
      return;
    }
    console.log(student);
    const res = await axios.post(
      "https://643eca22c72fda4a0b012123.mockapi.io/Cart",
      student
    );
    console.log(res);
    if (res.status === 201) {
      toast.success("Submitted Successfully");
      setTimeout(() => {
        navigate("/student");
      }, 3000);
    }
  };
  return (
    <div className="container">
      <h1 className="fs-2" style={{ fontFamily: "initial" }}>
        Create Student
      </h1>
      <div className="row  mt-4">
        <div className="col-6">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="col-6">
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="age"
              aria-describedby="emailHelp"
              placeholder="Enter Your Age"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="col-6">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="roll"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="col-6">
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="place"
              aria-describedby="emailHelp"
              placeholder=" Enter Your Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <button className=" btn btn-outline-dark" onClick={handleSubmit}>
        Submit
      </button>
      <Link to={"/Student"}>
        {" "}
        <button className="btn btn-outline-dark" style={{ float: "center" }}>
          Go Back
        </button>
      </Link>
      <Toaster
        toastOptions={{
          className: "",
          position: "bottom-center",
          style: {
            color: "#fff",
            background: "#000",
          },
        }}
      />
    </div>
  );
}

export default CreateStudent;
