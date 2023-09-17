import React, { useEffect, useState } from "react";
import {
  Eye,
  MagnifyingGlass,
  NotePencil,
  Sliders,
  Trash,
} from "@phosphor-icons/react";
import axios from "axios";
import "../styles/branch.css";
import BASE_URL from "../../../link";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import swal from "sweetalert";

const Branch = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  //fetch data:
  const [isFetched, setFetched] = useState(false);
  const fetchData = async () => {
    axios
      .get(`${BASE_URL}/branch`)
      .then((data) => {
        console.log(data.data);
        setBranches(data.data);
        setFetched(true);
      })
      .catch((e) => console.error(e));
  };

  //Branch Add form:
  const [BranchName, setBranchName] = useState();
  const [BranchAddress, setBranchAddress] = useState();
  const [Zipcode, setZipcode] = useState();
  const [Email, setEmail] = useState();
  const [Tel, setTel] = useState();

  const [addShow, setAddShow] = useState(false);
  const showAdd = () => setAddShow(true);
  const hideAdd = () => setAddShow(false);

  const AddSuccess = () => {
    swal({
      title: "Adding Success!",
      text: "Adding branch success!",
      icon: "success",
      button: "Ok",
    })
      .then(() => {
        hideAdd();
      })
      .then(() => {
        fetchData();
      });
  };

  const submitAddForm = () => {
    axios
      .post(`${BASE_URL}/branch/add`, {
        branchName: BranchName,
        branchAddress: BranchAddress,
        zipcode: Zipcode,
        email: Email,
        telephone: Tel,
      })
      .then((d) => {
        if (d.data.succeed) {
          console.log(d);
          AddSuccess();
        }
      });
  };

  //Delete Branch:
  // Delete

  // const [deleteId, setDeleteId] = useState(0)

  const deleteBranch = (deleteId) => {
    axios
      .delete(`${BASE_URL}/branch/delete/${deleteId}`)
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
        fetchData();
      })
      .catch((e) => console.error(e));
  };

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
        // swal("File has been deleted.", {
        //   icon: "success",
        // });
        // Here, you can add the logic to delete the file or perform other actions.
        // console.log("wews: ", deleteId) // deleteId is 0
        deleteBranch(deleteId);
        // window.location.reload()
      } else {
        swal("Your file is safe.");
      }
    });
  };

  //Update/edit Branch

  //Toggle Update Modal:
  const [updateModal, setUpdateModal] = useState(false);
  const openUpdateModal = () => setUpdateModal(true);
  const closeUpdateModal = () => setUpdateModal(false);

  //fetched current data:
  const [currentBranch, setCurrentBranch] = useState();

  //fetch Current edit data:
  const fetchCurrentBranch = (branchId) => {
    axios
      .get(`${BASE_URL}/branch/${branchId}`)
      .then((res) => {
        console.log(res.data.data);
        setCurrentBranch(res.data.data);
        console.log(currentBranch?.branch_name);
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
      fetchData();
    });
  };

  //edit branch data
  const [newBranchName, setNewBranchName] = useState();
  const [newBranchAddress, setNewBranchAddress] = useState();
  const [newZipCode, setNewZipCode] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newTel, setNewTel] = useState();

  const editBranch = (branchId) => {
    axios
      .patch(`${BASE_URL}/branch/edit/${branchId}`, {
        branchName: newBranchName,
        branchAddress: newBranchAddress,
        zipcode: newZipCode,
        email: newEmail,
        telephone: newTel,
      })
      .then((res) => {
        if (res.data.succeed) {
          handleUpdateSucceed();
        }
      });
  };

  //View branch:

  //toggle view modal:
  const [viewModal, setViewModal] = useState(false);
  const showView = () => setViewModal(true);
  const hideView = () => setViewModal(false);

  const [branchEmployees, setBranchEmployees] = useState([]);
  const [theBranchName, setTheBranchName] = useState("");
  const fetchBranchEmployees = (branchId) => {
    axios
      .get(`${BASE_URL}/branch/users/${branchId}`)
      .then((res) => {
        console.log("Branch users: ", res.data.users);
        setTheBranchName(res.data.branch_name);
        setBranchEmployees(res.data.users);
      })
      .catch((e) => console.error(e));
  };

  const [branches, setBranches] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBranches = branches.filter((branch) => {
    const matchesSelectedBranch =
      !selectedBranch || branch.name === selectedBranch;
    const matchesSearchQuery =
      (branch.branch_name &&
        branch.branch_name.toLowerCase().includes(searchQuery)) ||
      (branch.email && branch.email.toLowerCase().includes(searchQuery));

    return matchesSelectedBranch && matchesSearchQuery;
  });

  const handleSelectChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const filteredEntries = filteredBranches.length;

  const numberOfEntries = branches.length;

  const handleClearFilters = () => {
    setSelectedBranch("");
    setSearchQuery("");
  };

  useEffect(() => {
    fetchData();
  }, [isFetched]);

  return (
    <>
      <div className="branch module-content">
        <div className="branch-header">
          <div className="branch-title">BRANCH</div>
          <div className="add-branch">
            <button onClick={showAdd}>+ Add New Branch</button>
          </div>
        </div>
        <div className="branch-filter">
          <div className="select-branch">
            <label htmlFor="">Branch</label>
            <select
              name="branchSelect"
              id="branchSelect"
              value={selectedBranch}
              onChange={handleSelectChange}>
              <option value="">Select Branch</option>
              {filteredBranches.map((branch, index) => (
                <option
                  key={index}
                  value={branch.branch_name}>
                  {branch.branch_name}
                </option>
              ))}
            </select>
          </div>
          {/* <button
            type="button"
            className="filter"
            onClick={handleApplyFilter}>
            Apply Filter
          </button> */}
          <button
            type="button"
            className="clear"
            onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
        <div className="branch-search">
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
              <MagnifyingGlass
                size={30}
                set="light"
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search"
            />
            <div className="search-settings">
              <Sliders size={30} />
            </div>
          </div>
        </div>
        <div className="branch-table">
          <table>
            <thead>
              <tr>
                <td>BRANCH NAME</td>
                <td className="address">BRANCH ADDRESS</td>
                <td className="zipcode">ZIPCODE</td>
                <td className="email">EMAIL</td>
                <td className="telephone">TELEPHONE</td>
                <td className="designation">DESIGNATION</td>
                <td className="action">ACTION</td>
              </tr>
            </thead>
            <tbody>
              {filteredBranches.map((branch, index) => (
                <tr key={index}>
                  <td className="name">{branch.branch_name}</td>
                  <td className="address">{branch.branch_address}</td>
                  <td className="zipcode">{branch.zip_code}</td>
                  <td className="email">{branch.email}</td>
                  <td className="telephone">{branch.telephone_no}</td>
                  <td className="designation">{branch.designation}</td>
                  <td className="action">
                    <div className="view">
                      {/* View Branch Employees */}
                      <Button
                        variant="primary"
                        onClick={() => {
                          fetchBranchEmployees(branch.branchId);
                          showView();
                        }}>
                        <Eye />
                      </Button>
                    </div>
                    <div className="edit">
                      {/* Update Branch */}
                      <Button
                        variant="warning"
                        onClick={() => {
                          fetchCurrentBranch(branch.branchId);
                          openUpdateModal();
                        }}>
                        <NotePencil />
                      </Button>
                    </div>
                    <div className="delete">
                      {/* Delete Branch */}
                      <Button
                        variant="danger"
                        onClick={() => {
                          console.log(branch.branchId); // deleteId should be the branchId
                          // setDeleteId(branch.branchId)
                          handleDelete(branch.branchId);
                        }}>
                        <Trash />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="branch-pagination">
          <div className="show">
            Showing {filteredEntries} out of {numberOfEntries} Entries
          </div>
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

      {/* Add Modal */}
      <Modal
        show={addShow}
        onHide={hideAdd}
        backdrop="static"
        keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Branch</Modal.Title>
        </Modal.Header>
        {/* <form onSubmit={submitAddForm}> */}
        <Modal.Body>
          <div className="p-3">
            <Row className="mb-3">
              <Col>
                <div className="from-group">
                  <label htmlFor="">Branch Name</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={BranchName}
                    required
                    onChange={(e) => {
                      setBranchName(e.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="from-group">
                  <label htmlFor="">Branch Address</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={BranchAddress}
                    onChange={(e) => {
                      setBranchAddress(e.target.value);
                    }}
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="from-group">
                  <label htmlFor="">Zip Code:</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    required
                    value={Zipcode}
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col>
                <div className="from-group">
                  <label htmlFor="">Email: </label>
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    required
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="form-group">
                  <label htmlFor="">Telephone</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    required
                    value={Tel}
                    onChange={(e) => {
                      setTel(e.target.value);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn"
            variant="secondary"
            onClick={hideAdd}>
            Close
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={submitAddForm}
            variant="primary">
            Add
          </button>
        </Modal.Footer>
        {/* </form> */}
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
        {/* type='submit' */}
        {/* onSubmit={} */}
        {/* <form > */}
        <Modal.Body>
          <div className="p-3">
            <Row className="mb-3">
              <Col>
                <div className="from-group">
                  <label htmlFor="">Branch Name</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={
                      newBranchName ||
                      (currentBranch && currentBranch?.branch_name)
                    }
                    onChange={(e) => {
                      setNewBranchName(e.target.value);
                    }}
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="from-group">
                  <label htmlFor="">Branch Address</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={
                      newBranchAddress ||
                      (currentBranch && currentBranch?.branch_address)
                    }
                    onChange={(e) => {
                      setNewBranchAddress(e.target.value);
                    }}
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="from-group">
                  <label htmlFor="">Zip Code:</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={
                      newZipCode || (currentBranch && currentBranch?.zip_code)
                    }
                    onChange={(e) => {
                      setNewZipCode(e.target.value);
                    }}
                    required
                  />
                </div>
              </Col>
              <Col>
                <div className="from-group">
                  <label htmlFor="">Email: </label>
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    value={newEmail || (currentBranch && currentBranch?.email)}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                    }}
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="form-group">
                  <label htmlFor="">Telephone</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={
                      newTel || (currentBranch && currentBranch?.telephone_no)
                    }
                    onChange={(e) => {
                      setNewTel(e.target.value);
                    }}
                    required
                  />
                </div>
              </Col>
            </Row>
          </div>
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
              editBranch(currentBranch.branchId);
            }}
            variant="primary">
            Update
          </button>
        </Modal.Footer>
      </Modal>

      {/* Branch Employee Modal */}
      <Modal
        show={viewModal}
        onHide={hideView}
        backdrop="static"
        keyboard={true}
        size="xl"

        // fullscreen= {true}
      >
        <div className=" ">
          <Modal.Header closeButton>
            <Modal.Title>View</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="table-responsive view-table">
              <table className="w-100">
                <thead className="">
                  <tr>
                    <th className="p-3">DEPARTMENT</th>
                    <th className="p-3">Name</th>
                  </tr>
                </thead>
                <tbody className="">
                  {branchEmployees.length === 0 ? (
                    <tr>
                      <td
                        colSpan={2}
                        className="p-3 border-bottom text-center">
                        No Employees Available on this Branch
                      </td>
                    </tr>
                  ) : (
                    branchEmployees.map((view, index) => (
                      <tr key={index}>
                        <td className="p-3 border-bottom">{theBranchName}</td>
                        <td className="p-3 border-bottom">
                          {view.firstname} {view.middlename || " "}{" "}
                          {view.lastname}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                {/* <EmployeeBranch branchId={branchId}/> */}
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              variant="secondary"
              className="btn"
              onClick={hideView}>
              Close
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Branch;
