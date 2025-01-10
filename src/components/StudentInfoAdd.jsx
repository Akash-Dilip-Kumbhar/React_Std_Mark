"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
function StudentInfoAdd() {
  const [title, setname] = useState();
  const [age, setage] = useState();
  const [address, setaddress] = useState();
  const [list, setlist] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title)
    // console.log(age)
    // console.log(address)
    setlist([...list, { title, age, address }]);

    setname("");
    setage("");
    setaddress("");
  };

  const deleteListItem = (i) => {
    let copyList = [...list];
    copyList.splice(i, 1);
    setlist(copyList);
    Swal.fire({
      allowOutsideClick: false,
      heightAuto: false,
      backdrop: true,
      title: "Data Delete",
      icon: "success",
    });
  };

  let renderlist = (
    <tr>
      <td colSpan="5">No student in list</td>
    </tr>
  );
  if (list.length > 0) {
    renderlist = list.map((l, i) => {
      return (
        <tr>
          <td>{i + 1}</td>
          <td>{l.title}</td>
          <td>{l.age}</td>
          <td>{l.address}</td>
          <td>
            <span
              onClick={() => {
                deleteListItem(i);
              }}
            >
              <i class="bi bi-trash"></i>
            </span>
          </td>
        </tr>
      );
    });
  }

  const AddStudent = () => {
    Swal.fire({
      allowOutsideClick: false,
      heightAuto: false,
      backdrop: true,
      title: "Data added",
      text: "Student Added in List",
      icon: "success",
    });
  };

  return (
    <>
      <div className="container card-Bx">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-12 m-2">
            <div className="card">
              <div className="card-head">Student Information</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label htmlFor="studentname">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentName"
                      placeholder="Enter Name"
                      aria-describedby="studentName"
                      value={title}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentAge">Age</label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentAge"
                      placeholder="Enter Age"
                      aria-describedby="studentAge"
                      value={age}
                      onChange={(e) => {
                        setage(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentAdd">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentAdd"
                      placeholder="Enter Address"
                      aria-describedby="studentAdd"
                      value={address}
                      onChange={(e) => {
                        setaddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="card-footer">
                    <button
                      type="submit"
                      onClick={AddStudent}
                      className="btn btn-success btn-submit"
                    >
                      Add Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 m-2">
            <div className="card card-white">
              <div className="card-head">Student List</div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>{renderlist}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>Copyright By @Akash Kumbhar</footer>
    </>
  );
}
document.title="Student Information";

export default StudentInfoAdd;
