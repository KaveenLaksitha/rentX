import React from 'react'

function updateRental() {
    return (
        <div className="page-component-body">
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">
                    <form>
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-3 mb-4">Return of Rental</h3>
                                    <hr></hr>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="customer">Customer Details </label>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="cName">Customer name:</label>
                                            <input
                                                required
                                                id="cName"
                                                type="text"
                                                className="form-control "
                                                placeholder="K.H.P. Karunathilake"
                                                disabled
                                            // onChange={(e) => {
                                            // setfName(e.target.value);
                                            // }}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label class="form-label" for="contactNo">Contact Number:</label>
                                            <input
                                                required
                                                id="contactNo"
                                                type="text"
                                                className="form-control "
                                                placeholder="0774125639"
                                                disabled
                                            // onChange={(e) => {
                                            // setlName(e.target.value);
                                            // // }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                            <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                <div className="form-group col-md-6 ">
                                                    <label class="form-label" for="cAddress">Customer Address:</label>
                                                    <input
                                                        required
                                                        id="cAddress"
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="No 178/ 4 Thalahena, Malabe"
                                                        disabled
                                                    // onChange={(e) => {
                                                    // setfName(e.target.value);
                                                    // }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="Vehicle">Return Details </label>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4">
                                            <label for="rStatus" class="form-label-emp">Status</label>
                                            <select class="form-select" class="form-control"
                                                name="rStatus" id="rStatus" required>
                                                <option id="choose1" >select</option>
                                                <option id="pending" >pending</option>
                                                <option id="completed">completed</option>
                                            </select>
                                        </div>
                                        <div class="col-4 mr-2"  >
                                            <label for="rFrom" class="form-label-emp">From</label>
                                            <input type="date" class="form-control" id="rFrom"
                                                name="rFrom" required />
                                        </div>
                                        <div class="col-4" >
                                            <label for="rTo" class="form-label-emp">To</label>
                                            <input type="date" class="form-control" id="rTo"
                                                name="rTo" required />
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4 mr-2"  >
                                            <label for="returnDate" class="form-label-emp">Return Date</label>
                                            <input type="date" class="form-control" id="returnDate"
                                                name="returnDate" required />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="penaltyDays">Penalty Days</label>
                                            <input
                                                required
                                                id="penaltyDays"
                                                type="number"
                                                className="form-control "
                                                placeholder="0"
                                            // onChange={(e) => {
                                            // setfName(e.target.value);
                                            // }}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="penaltyCharges">Penalty Charges:</label>
                                            <input
                                                required
                                                id="penaltyCharges"
                                                type="text"
                                                className="form-control "
                                                placeholder="2500.00"
                                            // onChange={(e) => {
                                            // setfName(e.target.value);
                                            // }}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="advancedPayment">Advanced Payments:</label>
                                            <input
                                                required
                                                id="advancedPayment"
                                                type="text"
                                                className="form-control "
                                                placeholder="5000.00"
                                            // onChange={(e) => {
                                            // setfName(e.target.value);
                                            // }}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="remPayment">Remaining Payment:</label>
                                            <input
                                                required
                                                id="remPayment"
                                                type="text"
                                                className="form-control "
                                                placeholder="13250.00"
                                            // onChange={(e) => {
                                            // setfName(e.target.value);
                                            // }}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok">UPDATE</button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset"> CANCEL</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default updateRental