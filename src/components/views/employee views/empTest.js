import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router";



import { getAllEmployeesService } from "../../services/employeeService";
import moment from 'moment';

function EmpTest() {

    const [isFetching, setFetch] = useState(false);
    const [empList, setEmp] = useState([]);
    const [redirect, setRedirect] = useState(null);
    const [modalData, setData] = useState([]);




    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        setFetch({ isFetching: true });
        getAllEmployeesService().then((data) => {
            setEmp(data.data);
            console.log(data.data, "component did mount on new list")
        }
        )
    }, []);

    // useEffect(() => {
    //     handleViewOnClick().then((data) => {
    //         setData(data);
    //     })
    // });

    const openModal = (emp) => {
        setData(emp);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        console.log("req came for modal");
        console.log(modalData, "data came for modalzzzz");
        handleShow()
        // this.setState({ redirect: `/viewEmp/${userId}` });
    }


    return (
        <div className="page-component-body" >

            <Modal show={showModal} onHide={handleClose} className="d-flex align-items-center justify-content-center mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!
                    <div className="row">
                        <div className="col-12">
                            <table class="table table-striped table-dark ">
                                <tbody>
                                    <tr>
                                        <th class="text-left" scope="row">
                                            Employee ID
                                        </th>
                                        <td class="text-left">{modalData.empId}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-left" scope="row">
                                            First Name
                                        </th>
                                        <td class="text-left">{modalData.fName}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-left" scope="row">
                                            Last Name
                                        </th>
                                        <td class="text-left">fdsafdsaf</td>
                                    </tr>
                                    <tr>
                                        <th class="text-left" scope="row">
                                            e-mail
                                        </th>
                                        <td class="text-left">fdsafdsaf</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="table-emp">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Employees</h3>
                    </div>
                    <a href="/addEmployee" class="float-right">
                        <button class="btn btn-ok white">
                            Add Employee
                        </button>
                    </a>
                    <a href="/testModal" class="float-right ml-4">
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
                                    <td onClick={() => openModal(employee)}>
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
                                            class="btn btn-danger btn-sm"
                                        // onClick={() => this.handleDeleteOnClick(employee.userId)}
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
        </div >
    );
}

export default EmpTest
