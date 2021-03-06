import { React, useState } from "react";
import Swal from "sweetalert2";
import { addInquiry } from "../../services/employeeService";

import Header from "../../Header";

function MakeInquiry() {

    const [name, setName] = useState("");
    const [reason, setReason] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newInquiry = {
            name,
            reason,
            email,
            description
        };

        addInquiry(newInquiry).then((response) => {
            const message = response.ok
                ? "Inquiry submission successful!"
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
                    window.location.replace("/dashboard");;
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

    return (
        <div className="page-component-body">
            <Header></Header>
            <div class="container input-main-form-emp py-3">
                <div class="tab-content-emp" id="myTabContent">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-3 mb-4">Make an Inquiry</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addInquiryform" action="post" className="form" onSubmit={sendData}>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label class="form-label" for="Name">Name:</label>
                                            <input
                                                required
                                                id="name"
                                                type="text"
                                                className="form-control "
                                                placeholder="Name"
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label class="form-label" for="Email">email:</label>
                                            <input
                                                required
                                                id="email"
                                                type="email"
                                                className="form-control "
                                                placeholder="someone@example.com"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label class="form-label" for="Reason">Reason:</label>
                                            <input
                                                required
                                                id="reason"
                                                type="text"
                                                className="form-control "
                                                placeholder="Reason"
                                                onChange={(e) => {
                                                    setReason(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label class="form-label" for="Description">Description:</label>
                                            <textarea
                                                required
                                                id="description"
                                                type="textarea"
                                                className="form-control "
                                                placeholder="Description"
                                                onChange={(e) => {
                                                    setDescription(e.target.value);
                                                }}
                                            >
                                            </textarea>
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

export default MakeInquiry
