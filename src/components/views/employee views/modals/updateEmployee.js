import { React, useState, useEffect } from "react";

import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


import { Modal } from "react-bootstrap";

import { FilePond } from 'react-filepond';

import { updateEmployeeService } from "../../../services/employeeService";


function UpdateEmployee(emp) {

    // disable future dates
    const day = moment().subtract(18, 'years');
    const disableFutureDt = current => {
        return current.isBefore(day) && current.disableFutureDt
    }

    console.log("update modal dataaaaaa", emp);

    useEffect(() => {
        try {
            setfName(emp.data.fName);
            setlName(emp.data.lName);
            setGender(emp.data.gender);
            setDOB(moment(emp.data.DOB));
            setEmail(emp.data.email);
            setMaritalStatus(emp.data.maritalStat);
            setNIC(emp.data.nic);
            setDesignation(emp.data.designation);
            setCurrAdd(emp.data.currAdd);
            setPermAdd(emp.data.permAdd);
            setMobileNo(emp.data.mobileNo);
            setEmgContact(emp.data.emgContact);

        } catch {
            window.alert("something went wrong");
        }
    }, [emp.data]);

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState(moment(""));
    const [email, setEmail] = useState("");
    const [maritalStat, setMaritalStatus] = useState("");
    const [nic, setNIC] = useState("");
    const [designation, setDesignation] = useState("");
    const [currAdd, setCurrAdd] = useState("");
    const [permAdd, setPermAdd] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [emgContact, setEmgContact] = useState("");
    const [empPic, setEmpPic] = useState("");
    const [cv, setCV] = useState([]);

    const employee = {
        fName,
        lName,
        email,
        nic,
        designation,
        DOB,
        gender,
        maritalStat,
        currAdd,
        permAdd,
        mobileNo,
        emgContact,
        empPic,
        cv,
    };

    console.log("came dataaaaa", employee)


    const [TeleErr, setTeleNoErr] = useState("");
    const [EmgTeleErr, setEmgTeleNoErr] = useState("");
    const [NICErr, setNICErr] = useState("");


    function sendData(e) {
        e.preventDefault();
        console.log("outcome", e)

        const teleValid = TeleValidation();
        const EmgteleValid = EmgTeleValidation();
        const NICValid = NICValidation();

        if (teleValid && EmgteleValid && NICValid) {

            const newEmployee = {
                fName,
                lName,
                email,
                nic,
                designation,
                DOB,
                gender,
                maritalStat,
                currAdd,
                permAdd,
                mobileNo,
                emgContact,
                empPic,
                cv,
            };

            updateEmployeeService(newEmployee).then((response) => {
                const message = response.ok
                    ? "Employee insertion successful"
                    : response.err;
                alert(message);
                //window.location.replace("/empList");
            });
        }

    }

    //validate function
    const TeleValidation = () => {

        const TeleErr = {}; //State
        let teleValid = true; //setting flag


        if (mobileNo.trim().length > 10) {

            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        } else if (mobileNo.trim().length < 10) {
            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        }


        setTeleNoErr(TeleErr);//update error objects
        return teleValid;


    }

    //validate function
    const EmgTeleValidation = () => {

        const EmgTeleErr = {}; //State
        let EmgteleValid = true; //setting flag


        if (emgContact.trim().length > 10) {

            EmgTeleErr.InValidTeleNo = " *Invalid  Emergency contact number:"; // error msg
            EmgteleValid = false;
        } else if (emgContact.trim().length < 10) {
            EmgTeleErr.InValidTeleNo = " *Invalid Emergency contact number:"; // error msg
            EmgteleValid = false;
        }


        setEmgTeleNoErr(EmgTeleErr);//update error objects
        return EmgteleValid;


    }

    //validate function
    const NICValidation = () => {

        const NICErr = {}; //State
        let NICValid = true; //setting flag


        if (nic.trim().length > 12) {

            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        } else if (nic.trim().length < 10) {
            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        }


        setNICErr(NICErr);//update error objects
        return NICValid;


    }

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };


    return (

        <div>
            <Modal.Header closeButton>
                <Modal.Title>Update employee : {emp.data.fName + " " + emp.data.lName}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            <div className="row">
                                <div className="form-group col-md-6 ">
                                    <label className="form-label" for="fName">First name:</label>
                                    <input
                                        required
                                        value={fName}
                                        id="fName"
                                        type="text"
                                        className="form-control "
                                        placeholder="First name"
                                        onChange={(e) => {
                                            setfName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="lName">Last name:</label>
                                    <input
                                        required
                                        id="lName"
                                        type="text"
                                        className="form-control "
                                        placeholder="Last name"
                                        value={lName}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label-emp " for="gender">Gender:</label>
                                    <input
                                        required
                                        id="gender"
                                        type="text"
                                        className="form-control "
                                        placeholder="gender"
                                        value={gender}
                                        disabled
                                    />

                                </div>
                                <div className="col-md-6">
                                    <label className="form-label-emp" for="dob">Date of Birth:</label>
                                    <DatePicker
                                        required
                                        id="dob"
                                        name="dob"
                                        onChange={(e) => {
                                            setDOB(e);
                                        }}
                                        value={DOB}
                                        disabled
                                        dateFormat={"YYYY-MM-DD"}
                                        timeFormat={false}
                                        isValidDate={disableFutureDt}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="email">e-mail:</label>
                                    <input
                                        required
                                        id="email"
                                        type="email"
                                        className="form-control "
                                        placeholder="email"
                                        onChange={(e) => { { setEmail(e.target.value); validateEmail(e); } }}
                                        value={email}
                                    />
                                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                                        {message}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label-emp" for="maritalStatus">Marital Status:</label>

                                    <input
                                        required
                                        id="maritalStat"
                                        type="text"
                                        className="form-control "
                                        placeholder="marital status"
                                        value={maritalStat}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="NIC">NIC:</label>
                                    <input
                                        required
                                        id="nic"
                                        type="text"
                                        className="form-control "
                                        placeholder="NIC"
                                        onChange={(e) => {
                                            setNIC(e.target.value);
                                        }}
                                        value={nic}
                                    />


                                    {Object.keys(NICErr).map((key) => {
                                        return <div style={{ color: "red" }}>{NICErr[key]}</div>
                                    })}


                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label-emp" for="designation">Designation:</label>
                                    <select
                                        id="designation"
                                        className="form-control "
                                        onChange={(e) => {
                                            setDesignation(e.target.value);
                                        }}
                                        value={designation}
                                    >
                                        <option id="rental sales agent">Rental Sales Agent</option>
                                        <option id="driver">Driver</option>
                                        <option id="service agent">Service Agent</option>
                                        <option id="automotive technician">Automotive Technician</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="CurrAdd">Current address:</label>
                                    <input
                                        required
                                        id="currAdd"
                                        type="text"
                                        className="form-control "
                                        placeholder="Current address"
                                        value={currAdd}
                                        onChange={(e) => {
                                            setCurrAdd(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="PermAdd">Permanant address:</label>
                                    <input
                                        required
                                        id="permAdd"
                                        type="text"
                                        className="form-control "
                                        placeholder="Permanant address"
                                        value={permAdd}
                                        onChange={(e) => {
                                            setPermAdd(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="MobileNo">Mobile number:</label>
                                    <input
                                        required
                                        id="mobileNo"
                                        type="number"
                                        className="form-control "
                                        placeholder="Mobile number"
                                        value={mobileNo}
                                        onChange={(e) => {
                                            setMobileNo(e.target.value);
                                        }}
                                    />
                                    {Object.keys(TeleErr).map((key) => {
                                        return <div style={{ color: "red" }}>{TeleErr[key]}</div>
                                    })}

                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="emgContact">Emergency contact number:</label>
                                    <input
                                        required
                                        id="emgContact"
                                        type="number"
                                        className="form-control "
                                        placeholder="Emergency contact number"
                                        value={emgContact}
                                        onChange={(e) => {
                                            setEmgContact(e.target.value);
                                        }}
                                    />
                                    {Object.keys(EmgTeleErr).map((key) => {
                                        return <div style={{ color: "red" }}>{EmgTeleErr[key]}</div>
                                    })}


                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <div className="form-group">
                                        <label className="form-label-emp pb-3" for="empPic">Photo of the employee:</label>
                                        <input
                                            // required
                                            id="empPic"
                                            type="file"
                                            className="form-control-file"
                                            onChange={(e) => {
                                                setEmpPic(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-group">
                                        {/* <label className="form-label-emp pb-3" for="cv">CV:</label>
                                                <input
                                                    // required
                                                    id="cv"
                                                    type="file"
                                                    className="form-control-file fliepond"
                                                    onChange={(e) => {
                                                        setCV(e.target.value);
                                                    }}
                                                /> */}
                                        {/* <FilePond
                                                    files={cv}
                                                    onupdatefiles={setCV}
                                                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                                /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok">
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={emp.onHide}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )
}

export default UpdateEmployee;
