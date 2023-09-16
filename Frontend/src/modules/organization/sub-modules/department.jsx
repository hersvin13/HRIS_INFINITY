import React, { useEffect, useState } from "react";
import "../styles/department.css";
import { MagnifyingGlass, Sliders } from "@phosphor-icons/react";
import axios from "axios";
import BASE_URL from "../../../link";
import { Modal, Row, Col, Button } from "react-bootstrap";
import swal from "sweetalert";

const Department = () => {
  //Add Dept Modal:
  const [addModal, setAddModal] = useState(false);
  const showAdd = () => setAddModal(true);
  const closeAdd = () => setAddModal(false);

  //add success:
  const AddSuccess = () => {
    swal({
      title: "Succees!",
      text: "Department Added!",
      icon: "success",
      buttons: {
        Ok: "ok",
      },
    }).then(() => {
      fetchDept();
    });
  };

  //Add dept functions:
  const [deptName, setDeptName] = useState("");
  const addDept = () => {
    axios
      .post(`${BASE_URL}/department/deptAdd`, {
        departmentName: deptName,
      })
      .then((res) => {
        console.log(res);
        const data = res.data;
        if (data.success) {
          AddSuccess();
          closeAdd();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //Action Modal
  const [actionModalShow, setActionModal] = useState(false);
  const [setdeptID] = useState(0);
  const toggleAndHandleAction = (deptId) => {
    setActionModal(true);
    setdeptID(deptId);
  };
  const disableActionModal = () => setActionModal(false);

  const [departmentTable, setTable] = useState([]);
  //fetch Department:
  const fetchDept = () => {
    axios.get(`${BASE_URL}/department`).then((res) => {
      console.log(res.data);
      const data = res.data;
      if (data.success) {
        setTable(data.departments);
      }
    });
  };

  useEffect(() => {
    fetchDept();
  }, []);

  return (
    <>
      <div className="department">
        <div className="department-header">
          <div className="department-title">DEPARTMENT</div>
          <div className="add-department">
            <button onClick={showAdd}>+ Add New Department</button>
          </div>
        </div>
        <div className="department-filter">
          <div className="select-department">
            <label htmlFor="">Department</label>
            <select
              name=""
              id="">
              <option value="">Select Department</option>
              {departmentTable.map((dept, index) => (
                <option
                  key={index}
                  value={dept.col_departmentName}>
                  {dept.col_departmentName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="filter">
            Apply Filter
          </button>
          <button
            type="submit"
            className="clear">
            Clear Filters
          </button>
        </div>
        <div className="department-search">
          <div className="table-page">
            <label htmlFor="">Show</label>
            <input
              className="show"
              type="number"
              placeholder="0"
            />
          </div>
          <div className="search">
            <div className="search-people">
              <MagnifyingGlass size={30} />
            </div>

            <input
              type="text"
              placeholder="Search"
            />
            <div className="search-settings">
              <Sliders size={30} />
            </div>
          </div>
        </div>
        <div className="department-table">
          <table>
            <thead>
              <ul>
                <li>DEPARTMENT</li>
                <li>TOTAL EMPLOYEE</li>
                <li>ACTION</li>
              </ul>
            </thead>
            <tbody>
              {departmentTable.length > 0 ? (
                departmentTable.map((dept, index) => (
                  <ul key={index}>
                    <li>{dept.col_departmentName}</li>
                    <li>{dept.total_employees}</li>
                    <li>
                      <button
                        onClick={() => {
                          toggleAndHandleAction(dept.col_id);
                        }}>
                        ACTION
                      </button>
                    </li>
                  </ul>
                ))
              ) : (
                <ul>
                  <li>DEPARTMENT</li>
                  <li>TOTAL EMPLOYEE</li>
                  <li>ACTION</li>
                </ul>
              )}
            </tbody>
          </table>
        </div>
        <div className="department-pagination">
          <div className="show">Showing ? out of ? Entries</div>
          <div className="page">
            <button
              className="prev"
              type="submit">
              Previous
            </button>
            <button
              className="number-page"
              type="submit">
              1
            </button>
            <button
              className="next"
              type="submit">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Add Dept */}
      <Modal
        show={addModal}
        onHide={closeAdd}
        backdrop="static"
        keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <Row>
              <Col>
                <label htmlFor="">Name:</label>
                <br />
                <div className="input-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={deptName}
                    onChange={(e) => {
                      setDeptName(e.target.value);
                    }}
                    required
                  />
                  <span className="input-group-text">Department</span>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn"
            variant="secondary"
            onClick={closeAdd}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={addDept}
            variant="primary">
            Add
          </button>
        </Modal.Footer>
      </Modal>

      {/* Action Modal */}
      <Modal
        show={actionModalShow}
        onHide={disableActionModal}
        backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Department Name</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={disableActionModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Department;
