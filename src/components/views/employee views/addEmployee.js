import { React, useState } from "react";
import { addEmployeeService } from "../../services/employeeService";

function AddEmployee() {

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [maritalStat, setMaritalStat] = useState("");
    const [nic, setNIC] = useState("");
    const [currAdd, setCurrAdd] = useState("");
    const [permAdd, setPermAdd] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [emgContact, setEmgContact] = useState("");
    const [empPic, setEmpPic] = useState("");
    const [cv, setCV] = useState("");
    function sendData(e) {
        e.preventDefault();

        const newEmployee = {
            fName,
            lName,
            email,
            nic,
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
            // const message = response.ok
            //     ? "Employee insertion successful"
            //     : "Failed to insert employee";
            // alert(message);
            // window.location.replace("/empList");
        });
    }

    return (
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-3 mb-4">Add new employee</h3>
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
                                            <label className="form-label-emp" for="gender">Gender:</label>
                                            {/* <select
                                                id="gender"
                                                className="form-control "
                                            // // onChange={(e) => {
                                            // // setGender(e.target.value);
                                            // // }}
                                            // >
                                            //     <option id="male">Male</option>
                                            //     <option id="female">Female</option>
                                            // </select> */}
                                            <div className="form-check">
                                                <label className="form-check-label" for="inlineCheckbox1">
                                                    <input className="form-check-input" type="radio" id="gender" name="gender"
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }}
                                                        value="male" />Male</label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label" for="inlineCheckbox2">
                                                    <input className="form-check-input" type="radio" id="gender" name="gender"
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }} value="female" />Female</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-emp" for="dob">Date of Birth:</label>
                                            <input
                                                required
                                                id="dob"
                                                type="date"
                                                className="form-control "
                                                name="dob"
                                                onChange={(e) => {
                                                    setDOB(e.target.value);
                                                }}
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
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-label-emp" for="maritalStatus">Marital Status:</label>
                                            <select
                                                id="maritalStatus"
                                                className="form-control "
                                                onChange={(e) => {
                                                    setMaritalStat(e.target.value);
                                                }}
                                            >
                                                <option id="married">Married</option>
                                                <option id="unmarried">Unmarried</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
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
                                            />
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
                                                }}
                                            />
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
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <div className="form-group">
                                                <label className="form-label-emp" for="empPic">Photo of the employee:</label>
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
                                                <label className="form-label-emp" for="cv">CV:</label>
                                                <input
                                                    // required
                                                    id="cv"
                                                    type="file"
                                                    className="form-control-file"
                                                    onChange={(e) => {
                                                        setCV(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok">
                                                Submit
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset">
                                                reset
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
