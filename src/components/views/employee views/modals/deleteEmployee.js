import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { deleteEmployeeService } from "../../../services/employeeService";


function DeleteEmployee(emp) {


    const [modalData, setData] = useState(emp);
    const [resReason, setResReason] = useState("");

    console.log("model openingggg deleteee", emp.data)

    function onDelete() {
        // console.log("on deleteeeeeeeeeee", modalDataDelete)

        deleteEmployeeService(modalData.data, resReason).then((res) => {

            const message = res.ok
                ? "Data has been deleted"
                : res.err;
            alert(message);
            window.location.replace("/empList");
        });
    }

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Remove employee : {emp.data.fName + " " + emp.data.lName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addInquiryform" action="post" className="form"
                        // onSubmit={sendData}
                        >
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="fName">First name:</label>
                                    <input
                                        required
                                        id="fName"
                                        type="text"
                                        className="form-control "
                                        placeholder="first name"
                                        disabled
                                        value={emp.data.fName}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="Name">Last Name:</label>
                                    <input
                                        required
                                        id="name"
                                        type="text"
                                        className="form-control "
                                        placeholder="last name"
                                        disabled
                                        value={emp.data.lName}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="nic">NIC:</label>
                                    <input
                                        required
                                        id="nic"
                                        type="text"
                                        className="form-control "
                                        placeholder="xxxxxxxxV"
                                        disabled
                                        value={emp.data.nic}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="designation">Designation:</label>
                                    <input
                                        required
                                        id="designation"
                                        type="text"
                                        className="form-control "
                                        placeholder="designation"
                                        disabled
                                        value={emp.data.designation}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label class="form-label" for="Reason">Reason:</label>
                                    <input
                                        required
                                        id="reason"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="Reason"
                                        onChange={(e) => {
                                            setResReason(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className="col py-3 text-center">
                    <button type="submit" className="btn btn-delete"
                        onClick={() => onDelete()}>
                        Remove
                    </button>
                </div>
                <div className="col py-3 text-center" onClick={emp.onHide}>
                    <button type="reset" className="btn btn-reset">
                        cancel
                    </button>
                </div>
                {/* <Button onClick={emp.onHide}>Close</Button> */}
            </Modal.Footer>
        </div>
    )
}

export default DeleteEmployee