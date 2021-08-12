import React from 'react'

function makeInquiry() {
    return (
        <div className="page-component-body">
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">
                    <form>
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-3 mb-4">Make an Inquiry</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" action="#" method="POST" role="form">
                                        <div className="row">
                                            <div className="form-group col">
                                                <label class="form-label" for="Name">Name:</label>
                                                <input
                                                    required
                                                    id="Name"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Name"
                                                // onChange={(e) => {
                                                // setNIC(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label class="form-label" for="Reason">Reason:</label>
                                                <input
                                                    required
                                                    id="currAdd"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Reason"
                                                // onChange={(e) => {
                                                // setCurrAdd(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label class="form-label" for="Description">Description:</label>
                                                <textarea
                                                    required
                                                    id="mobileNo"
                                                    type="textarea"
                                                    className="form-control "
                                                    placeholder="Description"
                                                // onChange={(e) => {
                                                // setMobileNo(e.target.value);
                                                // }}
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default makeInquiry
