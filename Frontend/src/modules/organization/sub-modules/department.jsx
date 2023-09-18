import React, { useEffect, useState } from "react";
import "../styles/department.css";
import {
  MagnifyingGlass,
  NotePencil,
  Sliders,
  Eye,
  Trash,
} from "@phosphor-icons/react";
import axios from "axios";
import BASE_URL from "../../../link";
import { Modal, Row, Col, Button } from "react-bootstrap";
import swal from "sweetalert";

const Department = () => {
  //search
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

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

  //Update/edit Branch
  const [updateModal, setUpdateModal] = useState(false);
  const openUpdateModal = () => setUpdateModal(true);
  const closeUpdateModal = () => setUpdateModal(false);

  //fetched current data:
  const [currentDepartment, setCurrentDepartment] = useState();

  //fetch Current edit data:
  const fetchCurrentDepartment = (departmentId) => {
    axios
      .get(`${BASE_URL}/department/${departmentId}`)
      .then((res) => {
        console.log(res.data.data);
        setCurrentDepartment(res.data.data);
        console.log(currentDepartment?.col_departmentName);
      })
      .catch((e) => {
        console.error(e);
      });

    //output the correct branch name
  };

  const handleUpdateSucceed = () => {
    swal({
      title: "Update Message",
      text: "Update Success!",
      buttons: {
        Ok: "Ok",
      },
    }).then(() => {
      closeUpdateModal();
      fetchDept();
    });
  };

  const [newDepartmentName, setNewDepartmentName] = useState();

  const editDepartment = (updateDepartment) => {
    axios
      .patch(`${BASE_URL}/department/UpdateDept/${updateDepartment}`, {
        col_departmentName: newDepartmentName,
      })
      .then((res) => {
        if (res.data.succeed) {
          handleUpdateSucceed();
        }
      });
  };

  //Delete Department
  // Delete

  const deleteDepartment = (deleteId) => {
    axios
      .delete(`${BASE_URL}/department/deleteDept/${deleteId}`)
      .then((res) => {
        // console.log("deleting: ", deleteId)
        // console.log(res)
        if (res.data.succeed) {
          swal("File has been deleted.", {
            icon: "success",
          });
        }
      })
      .then(() => {
        fetchDept();
      })
      .catch((e) => console.error(e));
  };

  // Validations Delete
  const handleDelete = (deleteId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, it will take some time to recover the data!",
      icon: "warning",
      buttons: {
        cancel: "Cancel",
        confirm: "Delete",
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteDepartment(deleteId);
      } else {
        swal("Your file is safe.");
      }
    });
  };

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
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search"
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
              <tr>
                <td>DEPARTMENT</td>
                <td>TOTAL EMPLOYEE</td>
                <td className="action">ACTION</td>
              </tr>
            </thead>
            <tbody>
              {departmentTable.length > 0 ? (
                departmentTable.map((dept, index) => (
                  <tr key={index}>
                    <td className="department-name">
                      {dept.col_departmentName}
                    </td>
                    <td className="total_employees">{dept.total_employees}</td>
                    <td className="action">
                      <div className="view">
                        <button
                          onClick={() => {
                            toggleAndHandleAction(dept.col_id);
                          }}>
                          <Eye />
                        </button>
                      </div>
                      <div className="edit">
                        <button
                          onClick={() => {
                            fetchCurrentDepartment(dept.col_id);
                            openUpdateModal();
                          }}>
                          <NotePencil />
                        </button>
                      </div>
                      <div className="delete">
                        <button
                          onClick={() => {
                            console.log(dept.col_id);
                            handleDelete(dept.col_id);
                          }}>
                          <Trash />
                        </button>
                      </div>
                    </td>
                  </tr>
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

      {/* Update Modal */}
      <Modal
        show={updateModal}
        onHide={closeUpdateModal}
        backdrop="static"
        keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Department Name</label>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            value={
              newDepartmentName ||
              (currentDepartment && currentDepartment?.col_departmentName)
            }
            onChange={(e) => {
              setNewDepartmentName(e.target.value);
            }}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn"
            variant="secondary"
            onClick={closeUpdateModal}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              editDepartment(currentDepartment.deptId);
            }}
            variant="primary">
            Update
          </button>
        </Modal.Footer>
      </Modal>

      {/* Action Modal */}
      <Modal
        show={actionModalShow}
        onHide={disableActionModal}
        backdrop="static"></Modal>

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
