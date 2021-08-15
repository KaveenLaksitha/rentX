import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


function ViewEmployee(emp) {

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
                                    <td class="text-left">{emp.data.DOB}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Email
                                    </th>
                                    <td class="text-left">{emp.data.email}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Marital Status
                                    </th>
                                    <td class="text-left">{emp.data.maritalStat}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        NIC
                                    </th>
                                    <td class="text-left">{emp.data.nic}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Current Address
                                    </th>
                                    <td class="text-left">{emp.data.currAdd}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Permanent Address
                                    </th>
                                    <td class="text-left">{emp.data.permAdd}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Mobile Number
                                    </th>
                                    <td class="text-left">{emp.data.mobileNo}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Emergency Contact Number
                                    </th>
                                    <td class="text-left">{emp.data.emgContact}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={emp.onHide}>Close</Button>
            </Modal.Footer>
        </div>
    )
}

export default ViewEmployee