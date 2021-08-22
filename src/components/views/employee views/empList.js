import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import moment from 'moment';

import { getAllEmployeesService } from "../../services/employeeService";

import ViewEmpModal from "./modals/viewEmployee";
import DeleteEmployeeModal from "./modals/deleteEmployee"
import UpdateEmployeeModal from "./modals/updateEmployee";

export default function EmpList() {
    const [empList, setEmp] = useState([]);

    const [isFetching, setIsFetching] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {

        getAllEmployeesService().then((data) => {

            console.log("data for table", data);

            if (data.ok && !isFetching) {

                setIsFetching(true);
                setModalLoading(false);
                setEmp(data.data.reverse());

            } else {
                setModalLoading(true);
            }

        }
        )
    }, []);

    useEffect(() => {

        console.log("component did update", modalDataDelete)

    }, [modalDataDelete]);



    const openModalView = (emp) => {

        setData(emp);
        handleViewOnClick();

    }

    const handleViewOnClick = () => {

        console.log("req came for modal");
        console.log(modalData, "data came for modalllllll");
        setModalShow(true);

    }

    const openModalDelete = (data) => {

        setModalDataDelete(data);
        setModalDeleteConfirm(true);

    }

    const openModalUpdate = (data) => {

        console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }


    return (
        <div className="page-component-body " >

            <div className="table-emp">
                <div class="row table-head  mt-3">
                    <div class="col">
                        <h3 className="float-left">List of Employees</h3>
                    </div>
                    <a href="/addEmployee" class="float-right">
                        <button class="btn btn-ok white">
                            Add Employee
                        </button>
                    </a>
                    <a href="/pastEmpList" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Past Employees
                        </button>
                    </a>
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <input class="search_input" type="text" name="" placeholder="Search..." />
                                <button class="btn search_icon" type="button"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>NIC</th>
                            <th>e-mail</th>
                            <th>Date of Birth</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empList.map((employee) => {
                            return (

                                <tr>
                                    <td onClick={() => openModalView(employee)} data-toggle="tooltip" data-placement="right" title="Click to view details">
                                        {employee.fName + " " + employee.lName}
                                    </td>
                                    <td>{employee.nic}</td>
                                    <td>{employee.email}</td>
                                    <td>{moment(employee.DOB).format('YYYY-MMMM-D')}</td>
                                    <td>0{employee.mobileNo}</td>
                                    <td>
                                        <button
                                            class="btn btn-light btn-sm"
                                            onClick={() => openModalUpdate(employee)}
                                        >
                                            update
                                        </button>
                                        <button
                                            id="btnDelete"
                                            class="btn btn-danger btn-sm"
                                            onClick={() => openModalDelete(employee)}
                                        >
                                            remove
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* modal for view details of selected employee */}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ViewEmpModal
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>

            {/* modal for delete employee record*/}
            <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this item ?</p>

                </Modal.Body>
                <Modal.Footer>
                    <div className="row">
                        <div className="col -6">
                            <button type="submit" className="btn btn-delete" onClick={() => { setModalDelete(true); setModalDeleteConfirm(false); }}>
                                Confirm
                            </button>
                        </div>
                        <div className=" col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                            <button type="reset" className="btn btn-reset">
                                cancel
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* open delete form */}
            <Modal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <DeleteEmployeeModal
                    data={modalDataDelete}
                    onHide={() => setModalDelete(false)}
                />
            </Modal>

            {/* modal for display while loading or on error */}
            <Modal show={modalLoading} size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <div class="d-flex justify-content-center mt-2">
                        <div class="spinner-grow text-danger" role="status">
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                        </div><div class="spinner-grow text-danger" role="status">
                        </div>

                        <span class="sr-only">something went wrong...</span>
                    </div>
                    <div class="d-flex justify-content-center mt-4 h5"> something went wrong</div>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { window.location.reload() }}>
                            Try again
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* modal for update the data of employee */}
            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdateEmployeeModal
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>
        </div >
    );
}
