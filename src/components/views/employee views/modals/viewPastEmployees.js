import React from "react";
import { Modal } from "react-bootstrap";
import moment from 'moment';

function ViewPastEmployee(emp) {

    console.log("model openingggg", emp)

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Employee Name : {emp.data.fName + " " + emp.data.lName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Full Name
                                    </th>
                                    <td class="text-left">{emp.data.fName + " " + emp.data.lName}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Gender
                                    </th>
                                    <td class="text-left">{emp.data.gender}</td>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Date of Birth
                                    </th>
                                    <td class="text-left">{moment(emp.data.DOB).format('YYYY-MMMM-D')}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Email
                                    </th>
                                    <td class="text-left">{emp.data.email}</td>
                                </tr>

                                <tr>
                                    <th class="text-left" scope="row">
                                        Mobile Number
                                    </th>
                                    <td class="text-left">{emp.data.mobileNo}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        NIC
                                    </th>
                                    <td class="text-left">{emp.data.nic}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Designation
                                    </th>
                                    <td class="text-left">{emp.data.designation}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Reason for Resignaiion
                                    </th>
                                    <td class="text-left">{emp.data.resReason}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-close" onClick={emp.onHide}>Close</button>
            </Modal.Footer>
        </div>
    )
}

export default ViewPastEmployee
