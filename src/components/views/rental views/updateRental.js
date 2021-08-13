import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';

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


    const onSubmit = async e => {
        e.preventDefault();//to prevent the default submission by submit button

        const answer = window.confirm("Are you sure you want to update details?");
        if (answer) {

            const newRental = { from, to, status, payment, vehicleType, model, pickAddress, addPrice, advPayment, finalPrice, customerName, customerName, customerNIC, customerAdd, contactNo, NICcopy }

            await axios.put(`http://localhost:4000/rental/updateRental/${rentalId}`, newCustomer).then(() => {
                alert("Rental Record successfully Updated");

            }).catch((err) => {
                alert(err.response.data.error);
            })
            history.push("/rentalList")

        } else {

        }
    }

    const loadRental = async () => {
        await axios.get(`http://localhost:4000/rental/getRentalByID/${rentalId}`).then((res) => {
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
            setCustomerAdd(res.data.rental.setCustomerAdd);
            setContactNo(res.data.rental.contactNo);
            setNICcopy(res.data.rental.NICcopy);
        }).catch((err) => {
            alert(err.response.data.error);
        })

    }

    function refreshPage() {
        window.location.reload();
    }



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

export default UpdateRental