import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

function Student() {
  const [studentList, setStudentList] = useState([]);

  const fetchStudentList = async () => {
    const res = await axios.get(
      "https://643eca22c72fda4a0b012123.mockapi.io/Cart"
    );
    setStudentList(res.data);
  };

  useEffect(() => {
    fetchStudentList();
  }, []);

  console.log(studentList);

  const deleteStudent = async (id) => {
    const res = await axios.delete(
      `https://643eca22c72fda4a0b012123.mockapi.io/Cart/${id}`
    );
    console.log(res);
    if (res.status === 200) {
      toast.success("Deleted Successfully");
      fetchStudentList();
    }
  };
  return (
    <div class="container-fluid px-4" style={{ fontFamily: "initial" }}>
      <h1 class="mt-4 fs-3">STUDENT-LIST</h1>

      <div class="card mb-4">
        <div className=" card-header d-flex justify-content-between">
          <div class="">
            <i class="fas fa-table me-1"></i>
            DataTable Example
          </div>
          <div>
            <Link to={"/CreateStudent"}>
              <button className="btn btn-sm btn-primary">
                +Create Student
              </button>
            </Link>
          </div>
        </div>

        <div class="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Place</th>

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

                    <td>
                      <Link to={`/ViewStudent/${student.id}`}>
                        {" "}
                        <button
                          className="btn btn-sm btn-outline-warning"
                          style={{ marginRight: "8px" }}
                        >
                          View
                        </button>
                      </Link>

                      <button
                        className="btn btn-sm btn-outline-danger"
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
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Student;
