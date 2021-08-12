import React from 'react'

function addEmployee() {
    return (
        <div className="page-component-body">
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">
                    <form>
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-3 mb-4">Add new employee</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" action="#" method="POST" role="form">
                                        <div className="row">
                                            <div className="form-group col-md-6 ">
                                                <label class="form-label" for="fName">First name:</label>
                                                <input
                                                    required
                                                    id="fName"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="First name"
                                                // onChange={(e) => {
                                                // setfName(e.target.value);
                                                // }}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="lName">Last name:</label>
                                                <input
                                                    required
                                                    id="lName"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Last name"
                                                // onChange={(e) => {
                                                // setlName(e.target.value);
                                                // // }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label class="form-label-emp" for="gender">Gender:</label>
                                                {/* <select
                                                        id="gender"
                                                        className="form-control "
                                                    // onChange={(e) => {
                                                    // setGender(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="male">Male</option>
                                                        <option id="female">Female</option>
                                                    </select> */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label" for="inlineCheckbox1">Male</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" id="inlineCheckbox2" value="option2" />
                                                    <label class="form-check-label" for="inlineCheckbox2">Female</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label class="form-label-emp" for="dob">Date of Birth:</label>
                                                <input
                                                    required
                                                    id="dob"
                                                    type="date"
                                                    className="form-control "
                                                    name="dob"
                                                // onChange={(e) => {
                                                // setDOB(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="email">e-mail:</label>
                                                <input
                                                    required
                                                    id="email"
                                                    type="email"
                                                    className="form-control "
                                                    placeholder="email"
                                                // onChange={(e) => {
                                                // setEmail(e.target.value);
                                                // }}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label class="form-label-emp" for="maritalStatus">Marital Status:</label>
                                                <select
                                                    id="maritalStatus"
                                                    className="form-control "
                                                // onChange={(e) => {
                                                // setMaritalStat(e.target.value);
                                                // }}
                                                >
                                                    <option id="married">Married</option>
                                                    <option id="unmarried">Unmarried</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col">
                                                <label class="form-label" for="NIC">NIC:</label>
                                                <input
                                                    required
                                                    id="nic"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="NIC"
                                                // onChange={(e) => {
                                                // setNIC(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="CurrAdd">Current address:</label>
                                                <input
                                                    required
                                                    id="currAdd"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Current address"
                                                // onChange={(e) => {
                                                // setCurrAdd(e.target.value);
                                                // }}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="PermAdd">Permanant address:</label>
                                                <input
                                                    required
                                                    id="permAdd"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Permanant address"
                                                // onChange={(e) => {
                                                // setPermAdd(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="MobileNo">Mobile number:</label>
                                                <input
                                                    required
                                                    id="mobileNo"
                                                    type="number"
                                                    className="form-control "
                                                    placeholder="Mobile number"
                                                // onChange={(e) => {
                                                // setMobileNo(e.target.value);
                                                // }}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="emgContact">Emergency contact number:</label>
                                                <input
                                                    required
                                                    id="emgContact"
                                                    type="number"
                                                    className="form-control "
                                                    placeholder="Emergency contact number"
                                                // onChange={(e) => {
                                                // setEmgContact(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <div className="form-group">
                                                    <label class="form-label-emp" for="empPic">Photo of the employee:</label>
                                                    <input
                                                        required
                                                        id="empPic"
                                                        type="file"
                                                        className="form-control-file"
                                                    // onChange={(e) => {
                                                    // setEmpPic(e.target.value);
                                                    // }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <div className="form-group">
                                                    <label class="form-label-emp" for="cv">CV:</label>
                                                    <input
                                                        required
                                                        id="cv"
                                                        type="file"
                                                        className="form-control-file"
                                                    // onChange={(e) => {
                                                    // setCV(e.target.value);
                                                    // }}
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addEmployee
