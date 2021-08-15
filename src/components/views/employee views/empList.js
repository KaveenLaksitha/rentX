import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import moment from 'moment';

import { getAllEmployeesService } from "../../services/employeeService";

import ViewEmpModal from "./modals/viewEmployee";
import DeleteModal from "./modals/deleteEmployee"

export default function EmpList() {
    const [empList, setEmp] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {
        getAllEmployeesService().then((data) => {
            setEmp(data.data);
            console.log(data.data, "component did mount on new list")
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



    return (
        <div className="page-component-body " >

            <div className="table-emp ">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Employees</h3>
                    </div>
                    <a href="/addEmployee" class="float-right">
                        <button class="btn btn-ok white">
                            Add Employee
                        </button>
                    </a>
                    <a href="##" class="float-right ml-4">
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
                                    <td>{employee.mobileNo}</td>
                                    <td>
                                        <button
                                            class="btn btn-light btn-sm"
                                        // onClick={() => this.handleUpdateOnClick(employee.userId)}
                                        >
                                            update
                                        </button>
                                        <button
                                            id="btnDelete"
                                            class="btn btn-danger btn-sm"
                                            onClick={() => openModalDelete(employee)}
                                        >
                                            delete
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
            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this item ?</p>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { setModalDelete(true); setModalDeleteConfirm(false); }}>
                            Confirm
                        </button>
                    </div>
                    <div className="col py-3 text-center" onClick={() => setModalDeleteConfirm(false)}>
                        <button type="reset" className="btn btn-reset">
                            cancel
                        </button>
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
                <DeleteModal
                    data={modalDataDelete}
                    onHide={() => setModalDelete(false)}
                />
            </Modal>

        </div >
    );
}
