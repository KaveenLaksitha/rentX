import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


function RentalPlacement() {

    //disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };

    //disable future dates
    const today = moment().add(7, 'days');;
    const disableFutureDt = current => {
        return current.isBefore(today)
    }


    let history = useHistory();

    const [from, setFrom] = useState(moment());
    const [to, setTo] = useState(moment());
    const [status, setStatus] = useState("");
    const [payment, setPayment] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [model, setModel] = useState("");
    const [pickAddress, setPickAddress] = useState("");
    const [addPrice, setAddPrice] = useState("");
    const [advPayment, setAdvPayment] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerNIC, setCustomerNIC] = useState("");
    const [customerAdd, setCustomerAdd] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [NICcopy, setNICcopy] = useState("");

    const [rentals, setRentals] = useState([]);
    const [exists, setExists] = useState("");

    function getDateDiff() {
        var admission = moment(from, 'DD-MM-YYYY');
        var discharge = moment(to, 'DD-MM-YYYY');
        const diffDuration = discharge.diff(admission, 'days');
        return diffDuration;
    }


    function temporarilysendData(e) {
        e.preventDefault();//to prevent the default submission by submit button

        document.getElementById('rentalStatus').value = status;
        document.getElementById('rentalDuration').value = getDateDiff();
        var val3 = document.getElementById('perDayCharge').value;
        val3 = 5000;
        document.getElementById('addPrice').value = addPrice;
        document.getElementById('tax').value = 1500;
        document.getElementById('subRent').value = (((getDateDiff() * val3) + Number(addPrice) + Number(document.getElementById('tax').value)));
        document.getElementById('advancePay').value = advPayment;
        document.getElementById('finalPrice').value = ((Number(document.getElementById('subRent').value) - Number(advPayment)));

    }

    function getFinalPrice() {
        return document.getElementById('finalPrice').value = ((Number(document.getElementById('subRent').value) - Number(advPayment)));
    }


    function sendData(e) {
        e.preventDefault();//to prevent the default submission by submit button
        checkForPendingCustomer();
        //alert(rentals.length);

        if (rentals.length !== 0) {
            alert('Customer already has unsettled rentals')
        } else if (rentals.length === 0) {
            const answer = window.confirm("Are you sure you want to confirm submission?");
            if (answer) {

                const newRental = { from, to, status, payment, vehicleType, model, pickAddress, addPrice, advPayment, finalPrice, customerName, customerName, customerNIC, customerAdd, contactNo, NICcopy }

                axios.post("http://localhost:4000/rental/addRentalRec", newRental).then(() => {
                    alert("Rental Record added successfully")
                    /*function refreshPage() {
                        window.location.reload();
                    }
                    refreshPage();*/
                    history.push("/rentalList");

                }).catch((err) => {
                    alert(err.response.data.error)

                    //alert(err.response.data.errorCode)

                })
            }
        }
    }

    function checks() {
        checkForPendingCustomer();
        //alert(rentals.length);
    }


    function checkForPendingCustomer() {
        function checkUserExistance() {
            axios.get(`http://localhost:4000/rental/searchRentalRecs/${customerNIC}`).then((res) => {
                setRentals(res.data)
                return rentals.length
            }).catch((error) => {
                alert(error.message);
            })
        }
        checkUserExistance();
    }



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
                        <form onSubmit={temporarilysendData}>
                            <div class="container">
                                <br></br>
                                <h6 className="customersize2">Rental Dates</h6>

                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <br></br>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                            <div class="col-3 mr-2"  >
                                                <label for="rfrom" class="form-label-emp">From</label>
                                                <DatePicker required id="rfrom"
                                                    name="rfrom"
                                                    onChange={(event) => { setFrom(event); }}
                                                    timeFormat={false}
                                                    isValidDate={disablePastDt}
                                                />
                                            </div>
                                            <div class="col-3" >
                                                <label for="rto" class="form-label-emp">To</label>
                                                <DatePicker required id="rto"
                                                    name="rto"
                                                    onChange={(event) => { setTo(event); }}
                                                    timeFormat={false}
                                                    isValidDate={disablePastDt}
                                                />
                                            </div>
                                            <div class="col-3">
                                                <label for="rStatus" class="form-label-emp">Status</label>
                                                <select class="form-select" class="form-control"
                                                    name="rStatus"
                                                    id="rStatus"
                                                    required
                                                    onChange={(event) => { setStatus(event.target.value); }}>
                                                    <option id="pending" >choose...</option>
                                                    <option id="pending" >pending</option>
                                                    <option id="completed">completed</option>
                                                </select>
                                            </div>
                                            <div class="col-3" >
                                                <label for="rPayment" class="form-label-emp">Payment</label>
                                                <select class="form-select" class="form-control"
                                                    name="rPayment"
                                                    id="rPayment"
                                                    required
                                                    onChange={(event) => { setPayment(event.target.value); }}>
                                                    <option id="pending" >choose...</option>
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
                                                        name="vehicleType"
                                                        id="vehicleType"
                                                        required
                                                        onChange={(event) => { setVehicleType(event.target.value); }}>
                                                        <option id="choose3" >choose</option>
                                                        <option id="car" >car</option>
                                                        <option id="van">van</option>
                                                        <option id="bus">bus</option>
                                                    </select>
                                                </div>



                                                <div class="col-6" >
                                                    <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                    <select class="form-select" class="form-control"
                                                        name="vehicleModel"
                                                        id="vehicleModel"
                                                        required
                                                        onChange={(event) => { setModel(event.target.value); }}>
                                                        <option id="choose1" >choose</option>
                                                        <option id="customized" >cash</option>
                                                        <option id="ready-made">card</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-12" >
                                        <label class="form-label-emp" for="pAddress">Pick Up Address</label>
                                        <input type="text" class="form-control formInput"
                                            id="pAddress"
                                            name="pAddress"
                                            placeholder="Pick-Up Address(No 149/6A, Thalahena, Malabe)"
                                            tabindex="3"
                                            onChange={(event) => { setPickAddress(event.target.value); }}
                                            maxLength="200" />
                                    </div>
                                </div>


                            </div>

                            <div class="container">
                                <br></br>
                                <h6 className="customersize2">Payment Details</h6>

                                <div class="form-group">
                                    <div class="col-6" >
                                        <label class="form-label-emp" for="additionalPrice">Additional Price</label>

                                        <input type="number" class="form-control formInput"
                                            id="additionalPrice"
                                            name="additionalPrice"
                                            placeholder="Additional Price(Rs: 5000.00)"
                                            tabindex="3"
                                            onChange={(event) => { setAddPrice(event.target.value); }}
                                            max="10000" />
                                    </div>


                                    <div class="col-6" >
                                        <br></br>
                                        <label class="form-label-emp" for="advPayment">Advanced Payment</label>
                                        <input type="number" class="form-control formInput"
                                            id="advPayment"
                                            name="advPayment"
                                            placeholder="Advanced Payment(Rs: 3000.00)"
                                            tabindex="3"
                                            onChange={(event) => { setAdvPayment(event.target.value); }} />
                                    </div>


                                </div>
                            </div>
                            <div className="row">

                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok" >SUMMARY</button>
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
                                    <form id="contact-form" class="form" role="form" onSubmit={sendData}>
                                        <div class="form-group">
                                            <label class="form-label" for="cname">Customer Name</label>
                                            <input type="text" class="form-control formInput"
                                                id="cname"
                                                name="cname"
                                                placeholder="Full Name"
                                                tabindex="1"
                                                required
                                                maxLength="100"
                                                onChange={(event) => { setCustomerName(event.target.value); }} />

                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="caddress">Customer Address</label>
                                            <input type="text" class="form-control formInput"
                                                id="caddress"
                                                name="caddress"
                                                placeholder="Permenant Address" tabindex="2"
                                                required
                                                maxLength="200"
                                                onChange={(event) => { setCustomerAdd(event.target.value); }} />

                                        </div>
                                        <div class="row">
                                            <div class="col-6" >
                                                <div class="form-group">
                                                    <label class="form-label" for="cNumber">Contact Number</label>
                                                    <input type="number" class="form-control formInput"
                                                        id="cNumber"
                                                        name="cNumber"
                                                        placeholder="Contact Number (0784123695)"
                                                        maxLength="9"
                                                        minLength="9"
                                                        pattern="[0-9]{9}"
                                                        onChange={(event) => { setContactNo(event.target.value); }}
                                                        required />
                                                </div>
                                            </div>
                                            <div class="col-6" >
                                                <div class="form-group">
                                                    <label class="form-label" for="cNIC">Customer NIC</label>
                                                    <input type="text" class="form-control formInput"
                                                        id="cNIC"
                                                        name="cNIC"
                                                        placeholder="National ID(978412351V)"
                                                        onChange={(event) => { setCustomerNIC(event.target.value); }}
                                                        maxLength="10"
                                                        minLength="10"
                                                        pattern="[0-9]{9}V"
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label class="form-label" for="form-control formInput">NIC Soft Copy</label>
                                                    <input type="file" class="form-control formInput"
                                                        id="exampleFormControlFile1"
                                                        name="nicSoftCopy"
                                                        onChange={(event) => { setNICcopy(event.target.value); }}
                                                        pattern="*.[doc,pdf]"
                                                        required
                                                        onClick={checks} />
                                                </div>
                                            </div>


                                        </div>
                                        <div className="row">

                                            <div className="col py-3 text-center">
                                                <button type="submit" id="btnSub" className="btn btn-ok">SAVE</button>
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
                            <input type="text" class="form-control" id="rentalStatus" />
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
                            <input type="text" class="form-control" id="perDayCharge" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="additionalPrice">Additional Price : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="addPrice" />
                        </div>
                        <hr></hr>
                    </div>



                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="tax">Tax : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="tax" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="subRent">Sub Rental Price : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="subRent" onFocus={(event) => { setFinalPrice(event.target.value); }} />
                        </div>
                        <hr></hr>
                    </div>


                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="advancePay">Advanced Payment : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="advancePay" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label class="form-label-h" for="finalPay">Final Rental Price : </label>
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" id="finalPrice"
                            />
                        </div>
                    </div>
                </form>


            </div>

        </div >
    )
}

export default RentalPlacement
