import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Portal() {
  const [studentList, setStudentList] = useState([]);
  const [editStudent, setEditStudent] = useState({});
  const [id, setID] = useState("");
  const [modal, setModal] = useState(false);
  const fetchstudentList = async () => {
    const res = await axios.get(
      `https://643eca22c72fda4a0b012123.mockapi.io/Cart`
    );
    setStudentList(res.data);
  };
  useEffect(() => {
    fetchstudentList();
  }, []);
  console.log(studentList);
  const deleteStudent = async (id) => {
    const res = await axios.delete(
      `https://643eca22c72fda4a0b012123.mockapi.io/Cart/${id}`
    );
    fetchstudentList();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#000000",
          fontFamily: "initial",
        }}
      >
        <h2 className="text-warning">STUDENT DETAILS</h2>
        <Link to={"/CreateStudent"}>
          {" "}
          <button className="btn btn-primary">Create student+</button>
        </Link>
        <button className="btn btn-primary">Login</button>
      </div>
      <table class="table table-dark table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th> Date Of Join</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.place}</td>
                <td>{student.date}</td>
                <td>
                  <button className="btn btn-outline-warning">View</button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Toaster />
    </>
  );
}

export default Portal;
