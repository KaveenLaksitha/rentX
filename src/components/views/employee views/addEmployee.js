import { React, useState } from "react";

import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

import Header from "../../Header";

import { addEmployeeService } from "../../services/employeeService";


function AddEmployee() {

    // disable future dates
    const day = moment().subtract(18, 'years');
    const disableFutureDt = current => {
        return current.isBefore(day)
    }

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState(moment());
    const [email, setEmail] = useState("");
    const [maritalStat, setMaritalStatus] = useState("");
    const [nic, setNIC] = useState("");
    const [designation, setDesignation] = useState("");
    const [currAdd, setCurrAdd] = useState("");
    const [permAdd, setPermAdd] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [emgContact, setEmgContact] = useState("");
    const [empPic, setEmpPic] = useState("");
    const [cv, setCV] = useState("");


    const [TeleErr, setTeleNoErr] = useState("");
    const [EmgTeleErr, setEmgTeleNoErr] = useState("");
    const [NICErr, setNICErr] = useState("");


    function sendData(e) {
        e.preventDefault();

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

            addEmployeeService(newEmployee).then((response) => {
                const message = response.ok
                    ? "Employee insertion successful!"
                    : response.err;

                if (response.ok) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${message}`,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    ).then(() => {
                        window.location.reload();
                    })

                }
                else {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${message}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                }
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


    const [isNICValid, setNICIsValid] = useState(false);
    const [NICmessage, setNICMessage] = useState('');

    const NICRegex1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;
    const NICRegex2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateNIC = (event) => {
        const NIC = event.target.value;
        if (NICRegex1.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        } else if (NICRegex2.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        } else {
            setNICIsValid(false);
            setNICMessage('Please enter a valid NIC Number!');
        }
    };


    const [isMobileNoValid, setMobileNoValid] = useState(false);
    const [MobileNoMessage, setMobileMessage] = useState('');

    const MobileRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateMobile = (event) => {
        const MobileNo = event.target.value;
        if (MobileRegex.test(MobileNo)) {
            setMobileNoValid(true);
            setMobileMessage('Your Mobile Number looks good!');
        } else {
            setMobileNoValid(false);
            setMobileMessage('Please enter a valid Mobile Number!');
        }
    };

    const [isEmgNoNoValid, setEmgNoValid] = useState(false);
    const [EmgNoMessage, setEmgMessage] = useState('');

    const EmgRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateEmgMobile = (event) => {
        const MobileNo = event.target.value;
        if (EmgRegex.test(MobileNo)) {
            setEmgNoValid(true);
            setEmgMessage('Your Emergency Contact Number looks good!');
        } else {
            setEmgNoValid(false);
            setEmgMessage('Please enter a valid Emergency Contact Number!');
        }
    };


    return (

        <div className="page-component-body">
            <Header></Header>
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Add new employee</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="fName">First name:</label>
                                            <input
                                                required
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
                                                onChange={(e) => {
                                                    setlName(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="form-label-emp mb-3" for="gender">Gender:</label>
                                            <div className="form-check form-check-inline ml-2 mr-5">
                                                <label className="form-check-label" for="inlineCheckbox1">
                                                    <input className="form-check-input" type="radio" id="gender" name="gender"
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }}
                                                        value="Male" />Male</label>
                                            </div>
                                            <div className="form-check form-check-inline ml-5">
                                                <label className="form-check-label" for="inlineCheckbox2">
                                                    <input className="form-check-input" type="radio" id="gender" name="gender"
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }} value="Female" />Female</label>
                                            </div>

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
                                                dateFormat="YYYY-MM-DD"
                                                timeFormat={false}
                                                isValidDate={disableFutureDt}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 mt-1">
                                            <label className="form-label" for="email">e-mail:</label>
                                            <input
                                                required
                                                id="email"
                                                type="email"
                                                className="form-control "
                                                placeholder="email"
                                                onChange={(e) => { { setEmail(e.target.value); validateEmail(e); } }}
                                            />
                                            <div className={`message ${isValid ? 'success' : 'error'}`}>
                                                {message}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6 mt-2">
                                            <label className="form-label-emp pb-3" for="maritalStatus">Marital Status:</label>
                                            <div className="form-check form-check-inline ml-2 mr-5">
                                                <label className="form-check-label" for="inlineCheckbox1">
                                                    <input className="form-check-input" type="radio" id="married" name="maritalStat"
                                                        onChange={(e) => {
                                                            setMaritalStatus(e.target.value);
                                                        }}
                                                        value="Married" />Married</label>
                                            </div>
                                            <div className="form-check form-check-inline ml-5">
                                                <label className="form-check-label" for="inlineCheckbox2">
                                                    <input className="form-check-input" type="radio" id="unmarried" name="maritalStat"
                                                        onChange={(e) => {
                                                            setMaritalStatus(e.target.value);
                                                        }} value="Unmarried" />Unmarried</label>
                                            </div>
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
                                                    validateNIC(e);
                                                }}
                                            />
                                            <div className={`message ${isNICValid ? 'success' : 'error'}`}>
                                                {NICmessage}
                                            </div>

                                            {Object.keys(NICErr).map((key) => {
                                                // return <div style={{ color: "red" }}>{NICErr[key]}</div>
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
                                                onChange={(e) => {
                                                    setMobileNo(e.target.value);
                                                    validateMobile(e);
                                                }}
                                            />

                                            <div className={`message ${isMobileNoValid ? 'success' : 'error'}`}>
                                                {MobileNoMessage}
                                            </div>
                                            {Object.keys(TeleErr).map((key) => {
                                                // return <div style={{ color: "red" }}>{TeleErr[key]}</div>
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
                                                onChange={(e) => {
                                                    setEmgContact(e.target.value);
                                                    validateEmgMobile(e);
                                                }}
                                            />

                                            <div className={`message ${isEmgNoNoValid ? 'success' : 'error'}`}>
                                                {EmgNoMessage}
                                            </div>
                                            {Object.keys(EmgTeleErr).map((key) => {
                                                // return <div style={{ color: "red" }}>{EmgTeleErr[key]}</div>
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
                                                <label className="form-label-emp pb-3" for="cv">CV:</label>
                                                <input
                                                    // required
                                                    id="cv"
                                                    type="file"
                                                    className="form-control-file fliepond"
                                                    onChange={(e) => {
                                                        setCV(e.target.value);
                                                    }}
                                                />
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
                                                Submit
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset">
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
