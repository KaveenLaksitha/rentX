import React from "react";


function rentalPlacement() {

    return (
        <div className="page-component-body">
            <div class="container input-main-form ">
                <h2>Rental Placement</h2>
                <br></br>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Rental Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Customer Details</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-content-emp"></div>
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form >
                            <div class="container">
                                <br></br>
                                <h6 className="customersize2">Rental Dates</h6>

                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <br></br>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                            <div class="col-3.5 mr-2"  >
                                                <label for="rfrom" class="form-label-emp">From</label>
                                                <input type="date" class="form-control"
                                                    id="rfrom"
                                                    name="rfrom" required

                                                />
                                            </div>
                                            <div class="col-3.5" >
                                                <label for="rto" class="form-label-emp">To</label>
                                                <input type="date" class="form-control"
                                                    id="rto"
                                                    name="rto" required />
                                            </div>
                                            <div class="col-3">
                                                <label for="rStatus" class="form-label-emp">Status</label>
                                                <select class="form-select" class="form-control"
                                                    name="rStatus" id="rStatus" required>
                                                    <option id="choose1" >select</option>
                                                    <option id="pending" >pending</option>
                                                    <option id="completed">completed</option>
                                                </select>
                                            </div>

                                            <div class="col-3" >
                                                <label for="rPayment" class="form-label-emp">Payment</label>
                                                <select class="form-select" class="form-control"
                                                    name="rPayment" id="rPayment" required>
                                                    <option id="choose2" >select</option>
                                                    <option id="cash" >cash</option>
                                                    <option id="card">card</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <br></br><br></br>
                                <h6 className="customersize2">Vehicle Details</h6>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <br></br>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                <div class="col-6" >
                                                    <label class="form-label-emp" for="vehicleType">Vehicle Type</label>
                                                    <select class="form-select" class="form-control"
                                                        name="vehicleType" id="vehicleType" required>
                                                        <option id="choose3" >select</option>
                                                        <option id="car" >car</option>
                                                        <option id="van">van</option>
                                                        <option id="bus">bus</option>
                                                    </select>
                                                </div>



                                                <div class="col-6" >
                                                    <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                    <select class="form-select" class="form-control"
                                                        name="vehicleModel" id="vehicleModel" required>
                                                        <option id="choose1" >select</option>
                                                        <option id="customized" >cash</option>
                                                        <option id="ready-made">card</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-8" >
                                        <label class="form-label" for="pAddress">Pick Up Address</label>
                                        <input type="text" class="form-control formInput" id="pAddress" name="pAddress" placeholder="Pick-Up Address(No 149/6A, Thalahena, Malabe)" tabindex="3" />
                                    </div>
                                </div>


                            </div>

                            <div class="container">
                                <br></br>
                                <h6 className="customersize2">Payment Details</h6>
                                <br></br>
                                <div class="form-group">
                                    <div class="col-6" >
                                        <label class="form-label" for="additionalPrice">Additional Price</label>
                                        <input type="text" class="form-control formInput" id="additionalPrice" name="additionalPrice" placeholder="Additional Price(5000.00)" tabindex="3" />
                                    </div>


                                    <div class="col-6" >
                                        <label class="form-label" for="advPayment">Advanced Payment</label>
                                        <input type="text" class="form-control formInput" id="advPayment" name="advPayment" placeholder="Advanced Payment(3000.00)" tabindex="3" />
                                    </div>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok" >SAVE</button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" >RESET</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container ">
                            <div>
                                <br></br>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" role="form">
                                        <div class="form-group">
                                            <label class="form-label" for="cname">Customer Name</label>
                                            <input type="text" class="form-control formInput" id="cname" name="cname" placeholder="Full Name" tabindex="1" required />

                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="caddress">Customer Address</label>
                                            <input type="email" class="form-control formInput" id="caddress" name="caddress" placeholder="Permenant Address" tabindex="2" required />

                                        </div>
                                        <div class="row">
                                            <div class="col-6" >
                                                <div class="form-group">
                                                    <label class="form-label" for="cNumber">Contact Number</label>
                                                    <input type="text" class="form-control formInput" id="cNumber" name="cNumber" placeholder="Contact Number (0784123695)" tabindex="3" />
                                                </div>
                                            </div>
                                            <div class="col-6" >
                                                <div class="form-group">
                                                    <label class="form-label" for="cNIC">Customer NIC</label>
                                                    <input type="text" class="form-control formInput" id="cNIC" name="cNIC" placeholder="National ID(978412351V)" tabindex="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="form-control formInput">NIC Soft Copy</label>
                                                    <input type="file" class="form-control formInput" id="exampleFormControlFile1" />
                                                </div>
                                            </div>


                                        </div>
                                        <div className="row">

                                            <div className="col py-3 text-center">
                                                <button type="submit" className="btn btn-ok">SAVE</button>
                                            </div>
                                            <div className="col py-3 text-center">
                                                <button type="reset" className="btn btn-reset">RESET</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" rental-summary-body">
                <div class="tab-content-emp"></div>
                <form>
                    <br></br>
                    <center>
                        <h2>Rental Summary</h2></center>
                    <div class="form-row ">
                        <div class="col-6">
                            <label class="form-label-h" for="rentalStatus">Rental Status : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="rentalDuration" >Rental Duration : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="rentalDuration" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="perDayCharge">Rental Per Day : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="additionalPrice">Additional Price: </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                        <hr></hr>
                    </div>



                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="tax">Tax : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="subRent">Sub Rental Price : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                        <hr></hr>
                    </div>


                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="advancePay">Advanced Payment : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="finalPay">Final Rental Price : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                </form>


            </div>

        </div >
    )
}

export default rentalPlacement
