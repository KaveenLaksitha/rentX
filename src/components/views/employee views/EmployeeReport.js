import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import 'react-datetime/css/react-datetime.css';

import { searchForReport } from "../../services/employeeService"

import Pdf from "react-to-pdf";
const ref = React.createRef();


function ReservationReport() {

    const [designation, setDesignation] = useState("");
    const [ageFrom, setAgeFrom] = useState("");
    const [ageTo, setAgeTo] = useState("");
    const [gender, setGender] = useState("");
    const [empList, setempList] = useState([]);

    function sendData(e) {
        e.preventDefault();
        changeBoxes();
        console.log("dataaa", { designation, ageFrom, ageTo, gender })

        const payload = { designation, ageFrom, ageTo, gender };

        searchForReport(payload).then((data) => {
            const message = "No record found!"
            console.log("data in emp list page", data);
            if (data.ok) {

                setempList(data.data.reverse());

            } else {
                Swal.fire({
                    title: 'Oops!',
                    text: `${message}`,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }
                ).then(() => {
                    window.location.reload();
                })
            }

        })
    }

    function changeBoxes() {
        document.getElementById('myTabContent').style.display = "none";
        document.getElementById('myTabContent2').style.display = "block";

    }

    return (
        <div className="page-component-body">
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <form>
                                    <center>
                                        <h3 className=" mt-3 mb-4">Generate Report on Employee Records </h3>
                                    </center>
                                    <hr></hr>
                                </form>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="contact-form" class="form" onSubmit={sendData}>
                                    <div class="form-group">
                                        <label class="form-label-emp" for="customeraddress">Designation</label>
                                        <select
                                            type="text"
                                            class="form-control formInput"
                                            id="customeraddress"
                                            name="customeraddress"
                                            placeholder="Customer Address"
                                            tabindex="4"
                                            onChange={(e) => {
                                                setDesignation(e.target.value);
                                            }}
                                        >
                                            <option detal>select designation</option>
                                            <option id="rental sales agent">Rental Sales Agent</option>
                                            <option id="driver">Driver</option>
                                            <option id="service agent">Service Agent</option>
                                            <option id="automotive technician">Automotive Technician</option>
                                        </select>
                                    </div>

                                    <br></br>
                                    <div class="row">

                                        <div className="form-group col-md-2">
                                            <label class="form-label-emp" for="customeraddress">Age Between</label>
                                        </div>

                                        <div className="form-group col-md-2">
                                            <input
                                                type="number"
                                                class="form-control formInput"
                                                id="dateFrom"
                                                name="DateFrom"
                                                placeholder=""
                                                tabindex="4"
                                                onChange={(e) => { setAgeFrom(e.target.value) }}
                                                required
                                            />
                                        </div>

                                        <div className="form-group col-md-2">
                                            <input
                                                type="number"
                                                class="form-control formInput"
                                                id="dateTo"
                                                name="dateTo"
                                                placeholder=""
                                                tabindex="4"
                                                onChange={(e) => { setAgeTo(e.target.value) }}
                                                required
                                            />
                                        </div>
                                    </div>


                                    <br></br>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label className="form-label-emp " for="gender">Gender:</label>
                                            <div className="form-check form-check-inline ml-2 mr-5 col-md-2">
                                                <label className="form-check-label" for="inlineCheckbox1">
                                                    <input className="form-check-input" type="radio" id="gender" name="gender"
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }}
                                                        value="Male" />Male</label>
                                            </div>
                                            <div className="form-check form-check-inline ml-5 col-md-2">
                                                <label className="form-check-label" for="inlineCheckbox2">
                                                    <input className="form-check-input" type="radio" id="gender" name="gender"
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }} value="Female" />Female</label>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok" >
                                                Generate
                                            </button>
                                        </div>

                                    </div>
                                    <br></br>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="myTabContent2" style={{ display: "none" }}>
                    <Pdf targetRef={ref} filename="RentalReport.pdf">
                        {({ toPdf }) => <button class="btn btn-download white" onClick={toPdf}><i class="fa fa-download" aria-hidden="true"></i></button>}
                    </Pdf>
                    <div ref={ref} className="pl-4">
                        <div className="report">
                            <img src="https://i.ibb.co/XJCP1bZ/emp-Report.jpg" alt="emp-Report-head" />

                            <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Designation</th>
                                        <th>NIC</th>
                                        <th>Mobile number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empList.map((employee) => {
                                        return (

                                            <tr >

                                                <td >{employee.fName + " " + employee.lName}</td>
                                                <td >{employee.gender}</td>
                                                <td >{employee.designation}</td>
                                                <td >{employee.nic}</td>
                                                <td >{employee.mobileNo}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <h6 className="pb-5">Report generated on : <span id="dateDisplay"></span></h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReservationReport;
