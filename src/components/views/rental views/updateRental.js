import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import Header from "../../Header";
import Swal from "sweetalert2";

function UpdateRental() {
    let history = useHistory();
    const { rentalId } = useParams();

    useEffect(() => {
        loadRental();
    }, []);

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
    const [returnDate, setReturnDate] = useState("");
    const [penaltyDays, setPenaltyDays] = useState("");
    const [penalty, setPenalty] = useState("");
    const [lastPaid, setLastPaid] = useState("");
    const [rem, SetRem] = useState("");
    const [penDay, SetPenDays] = useState("");

    //disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);

    };

    // calculate the penalty Day
    function getDateDiff() {
        var TO = moment(to).format('DD/MM/YYYY');
        var Ret = moment(returnDate).format('DD/MM/YYYY');
        var admission = moment(TO, 'DD-MM-YYYY');
        var discharge = moment(Ret, 'DD-MM-YYYY');
        const diffDuration = discharge.diff(admission, 'days');
        return (diffDuration);
    }

    // calculate the penalty Cost
    function calculatePenaltyCost() {
        const Price = (finalPrice * (3 / 100)) * getDateDiff()
        return Price;
    }

    //get the remaining payment to be made
    function calculateRemainingPayment() {
        return ((finalPrice - advPayment) + calculatePenaltyCost())
    }

    function calculateCharges() {
        document.getElementById('penaltyDays').value = getDateDiff();
        document.getElementById('penaltyCharges').value = calculatePenaltyCost();
        document.getElementById('remPayment').value = calculateRemainingPayment();
    }

    const Days = getDateDiff();
    const penaltyCharges = calculatePenaltyCost();
    const remainder = calculateRemainingPayment();

    function UpdatedPenaltyDays() {
        var value = getDateDiff();
        SetPenDays(value);
    }

    function UpdatedRemainder() {
        SetRem(calculateRemainingPayment());
    }


    const onSubmit = async e => {
        e.preventDefault();//to prevent the default submission by submit button

        //alert(penDay);
        //alert(rem);

        //const answer = window.confirm("Are you sure you want to update details?");
        Swal.fire({
            title: "Are you sure you want to confirm submission? ",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Proceed",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191",

        }).then((result) => {

            if (result.isConfirmed) {

                const newRental = { from, to, status, payment, vehicleType, model, pickAddress, addPrice, advPayment, finalPrice, customerName, customerName, customerNIC, customerAdd, contactNo, NICcopy, penDay, penaltyCharges, returnDate, rem }

                axios.put(`https://rent-x-api.herokuapp.com/rental/updateRental/${rentalId}`, newRental).then(() => {
                    //alert("Rental Record successfully Updated");
                    Swal.fire({
                        title: "Rental Record successfully Updated! ",
                        icon: 'success',
                        confirmButtonColor: "#207159",


                    }).then((res) => {
                        if (res.isConfirmed) {
                            window.location.replace('/rentalList');
                        }
                    })


                }).catch((err) => {
                    //alert(err.response.data.error);
                    Swal.fire({
                        title: "Error occured ! ",
                        text: `${err.response.data.error}`,
                        icon: 'error',
                        confirmButtonColor: "#207159",

                    })

                })

            } else if (result.isDenied) {
                refreshPage();
            }

            //window.location.replace("/rentalList");
        })
    }

    const loadRental = async () => {
        await axios.get(`https://rent-x-api.herokuapp.com/rental/getRentalByID/${rentalId}`).then((res) => {
            console.log(res.data)
            setFrom(res.data.rental.from);
            setTo(res.data.rental.to);
            setStatus(res.data.rental.status);
            setPayment(res.data.rental.payment);
            setVehicleType(res.data.rental.vehicleType);
            setModel(res.data.rental.model);
            setPickAddress(res.data.rental.pickAddress);
            setAddPrice(res.data.rental.addPrice);
            setAdvPayment(res.data.rental.advPayment);
            setFinalPrice(res.data.rental.finalPrice);
            setCustomerName(res.data.rental.customerName);
            setCustomerNIC(res.data.rental.customerNIC);
            setCustomerAdd(res.data.rental.customerAdd);
            setContactNo(res.data.rental.contactNo);
            setNICcopy(res.data.rental.NICcopy);
            setPenaltyDays(res.data.rental.penaltyDays);
            setReturnDate(res.data.rental.returnDate);
            setPenalty(res.data.rental.penaltyCharges);
            setLastPaid(res.data.rental.lastPaid);
        }).catch((err) => {
            //alert(err.response.data.error);
            Swal.fire({
                title: "Error occured !",
                text: `${err.response.data.error}`,
                icon: 'error',
                confirmButtonColor: "#207159",

            })
        })

    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="page-component-body">
            <Header></Header>
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">
                    <form onSubmit={onSubmit}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-3 mb-4">Return of Rental</h3>
                                    <hr></hr>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="customer">Customer Details :</label>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label" for="cName">Customer name :</label>
                                            <input
                                                required
                                                id="cName"
                                                type="text"
                                                className="form-control "
                                                value={customerName}
                                                disabled
                                                onChange={(e) => {
                                                    setCustomerName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label class="form-label" for="contactNo">Contact Number:</label>
                                            <input
                                                required
                                                id="contactNo"
                                                type="text"
                                                className="form-control "
                                                value={contactNo}
                                                disabled
                                                onChange={(e) => {
                                                    setContactNo(e.target.value);
                                                }}
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
                                                        value={customerAdd}
                                                        disabled
                                                        onChange={(e) => {
                                                            setCustomerAdd(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="form-group col-md-6 ">
                                                    <label class="form-label" for="cNIC">Customer NIC:</label>
                                                    <input
                                                        required
                                                        id="cNIC"
                                                        type="text"
                                                        className="form-control "
                                                        value={customerNIC}
                                                        disabled
                                                        onChange={(e) => {
                                                            setCustomerNIC(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="customersize2" for="Vehicle">Return Vehicle Details </label>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div class="col-4">
                                            <label for="rStatus" class="form-label-emp">Status</label>
                                            <select class="form-select" class="form-control"
                                                name="rStatus" id="rStatus" required
                                                value={status}
                                                onChange={(e) => {
                                                    setStatus(e.target.value);
                                                    UpdatedPenaltyDays();
                                                    UpdatedRemainder();
                                                }}>
                                                <option id="pending" >pending</option>
                                                <option id="completed">completed</option>
                                            </select>
                                        </div>
                                        <div class="col-4 mr-2"  >
                                            <label for="rFrom" class="form-label-emp">From</label>
                                            <DatePicker required id="rfo"
                                                name="rfo"
                                                value={moment(from).format('MM/DD/YYYY')}
                                                onChange={(e) => { setTo(e); }}
                                                timeFormat={false}

                                                readonly="readonly"
                                            />
                                        </div>
                                        <div class="col-4" >
                                            <label for="rTo" class="form-label-emp">To</label>

                                            <DatePicker required id="rto"
                                                name="rto"
                                                value={moment(to).format('MM/DD/YYYY')}
                                                onChange={(e) => { setTo(e); }}
                                                timeFormat={false}
                                                readonly="readonly"
                                            />
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
                                            <DatePicker required id="returnDate"
                                                name="returnDate"
                                                value={moment(returnDate).format('MM/DD/YYYY')}
                                                onChange={(e) => { setReturnDate(e); }}
                                                timeFormat={false}
                                                isValidDate={disablePastDt}
                                                onClose={calculateCharges}
                                            />
                                        </div>

                                        <div class="col-4 mr-2"  >
                                            <label for="vehicle" class="form-label-emp">Vehicle Model</label>
                                            <input type="text" class="form-control" id="vehicleModel"
                                                name="vehicleModel" required disabled
                                                value={vehicleType + " " + model}
                                            />
                                        </div>

                                        <div class="col-4 mr-2"  >
                                            <label for="lastTot" class="form-label-emp">Last Total</label>
                                            <input type="text" class="form-control" id="lastTot"
                                                name="lastTot" required disabled
                                                value={finalPrice}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <br></br>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label-emp" for="penaltyDays">Total Penalty Days</label>
                                            <input

                                                id="penaltyDays"
                                                type="number"
                                                className="form-control "
                                                placeholder="0"
                                                value={penaltyDays}
                                                onChange={(e) => {
                                                    setPenaltyDays(e.target.value);
                                                    //calculateCharges();
                                                }}

                                            />
                                        </div>

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label-emp" for="penaltyCharges">Current Penalty Charges:</label>
                                            <input

                                                id="penaltyCharges"
                                                type="number"
                                                className="form-control "
                                                placeholder="2500.00"
                                                value={penalty}
                                                onChange={(e) => {
                                                    setPenalty(e.target.value);
                                                    //calculateCharges();
                                                }}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                    <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label-emp" for="advancedPayment">Advanced Payments:</label>
                                            <input
                                                required
                                                id="advancedPayment"
                                                type="number"
                                                className="form-control "
                                                value={advPayment}
                                                onChange={(e) => {
                                                    setAdvPayment(e.target.value);
                                                }}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 ">
                                            <label class="form-label-emp" for="remPayment">Remaining Payment to be made:</label>
                                            <input

                                                id="remPayment"
                                                type="number"
                                                className="form-control "
                                                placeholder="13250.00"
                                                value={lastPaid}
                                                onChange={(e) => {
                                                    setLastPaid(e.target.value);
                                                }} />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok">UPDATE</button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={refreshPage}> CANCEL</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )

}

export default UpdateRental