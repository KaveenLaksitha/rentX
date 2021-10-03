import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import moment from 'moment';

import Header from "../../Header";

import { getAllPastEmployeesService, searchPastEmployeesService } from "../../services/employeeService";

import ViewEmpModal from "./modals/viewPastEmployees";

export default function PastEmpList() {
    const [pastRmpList, setEmp] = useState([]);
    const [search, setSearch] = useState("");

    const [isFetching, setIsFetching] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {

        if (document.getElementById('submit').clicked) {
            searchEmployees();
        }

        getAllPastEmployeesService().then((data) => {
            if (data.ok && !isFetching) {

                setIsFetching(true);
                setEmp(data.data.reverse());
            } else {
                setModalLoading(true);
            }
        }
        )
    }, []);

    //for search employees
    const searchEmployees = (e) => {

        e.preventDefault();

        searchPastEmployeesService(search).then((data) => {
            if (data.ok) {

                setEmp(data.data.reverse());

            } else {
                setModalLoading(true);
            }

        })


    }


    const openModalView = (emp) => {
        setData(emp);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        console.log("req came for modal");
        console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }



    return (
        <div className="page-component-body " >
            <Header></Header>
            <div className="table-emp ">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Past Employees</h3>
                    </div>
                    <a href="/empList" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Current Employees
                        </button>
                    </a>
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form onSubmit={searchEmployees}>
                                    <input class="search_input" type="text" name="" placeholder="Search..." value={search} onChange={(event) => { setSearch(event.target.value) }} required />
                                    <button class="btn search_icon" type="submit" id="submit" name="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>e-mail</th>
                            <th>Mobile Number</th>
                            <th>NIC</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pastRmpList.map((employee) => {
                            return (

                                <tr>
                                    <td onClick={() => openModalView(employee)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                        {employee.fName + " " + employee.lName}
                                    </td>
                                    <td>{employee.gender}</td>
                                    <td>{moment(employee.DOB).format('YYYY-MMMM-D')}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.mobileNo}</td>
                                    <td>{employee.nic}</td>
                                    <td>{employee.designation}</td>
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
        </div >
    );
}
