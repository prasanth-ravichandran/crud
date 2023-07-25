import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewStudent() {
  const params = useParams();
  const [student, setStudent] = useState({});
  console.log(params);
  const getStudentByid = async () => {
    const res = await axios.get(
      `https://643eca22c72fda4a0b012123.mockapi.io/Cart/${params.id}`
    );

    setStudent(res.data);
  };

  useEffect(() => {
    getStudentByid();
  }, []);
  console.log(student);
  return (
    <div className="ViewStudent">
      <div className="container m-auto w-50 mt-4">
        <div class="card" style={{ width: "18rem", background: "#48996b70" }}>
          <img src={student.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              {student.name}({student.age})
            </h5>
            <h5>{student.place}</h5>
            <h5>{student.dateofjoin}</h5>
            <Link to={"/student"}>
              <a class="btn btn-outline-dark">Go back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
