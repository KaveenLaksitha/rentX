import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";



function Updatereservation() {



    return (
            <div className="page-component-body">
                <div class="container input-main-form-emp">
                    <div class="tab-content-emp" id="myTabContent">
                        <form>
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="text-left mt-3 mb-4">Return of Reservation</h3>
                                        <hr></hr>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" class="form" action="#" method="POST" role="form">
                                        <div class="row">
                                                <br></br>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h3 className="text-left mt-4 mb-3 customersize">Customer Details</h3>
                                                </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="customerName">Customer Name</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customerName" 
                                                    name="customerName" 
                                                    placeholder="Customer Name" t
                                                    tabindex="1" 
                                                    required />
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label class="form-label" for="contactNumber">Contact Number</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="contactNumber" 
                                                    name="contactNumber" 
                                                    placeholder="Contact Number" 
                                                    tabindex="2" 
                                                    required/>
                                            </div>
                                            </div>
                                            
                                            <div class="form-group">
                                            <label class="form-label" for="customerAddress">Customer Address</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customerAddress" 
                                                    name="customerAddress" 
                                                    placeholder="Customer Address" 
                                                    tabindex="3" 
                                                    required />
                                            </div>
                                            <div class="row">
                                            <br></br>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h3 className="text-left mt-4 mb-4 reservesize">Reservation Details</h3>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="status">Status</label>
                                                <select
                                                        id="status"
                                                        className="form-control "
                                                        tabindex="4" 
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="pending">Pending</option>
                                                        <option id="complete">Complete</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="from">From</label>
                                                <input 
                                                    type="date" 
                                                    class="form-control formInput" 
                                                    id="from" 
                                                    name="from" 
                                                    placeholder="" 
                                                    tabindex="5" 
                                                    required />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="to">To</label>
                                                <input 
                                                    type="date" 
                                                    class="form-control formInput" 
                                                    id="to" 
                                                    name="to" 
                                                    placeholder="" 
                                                    tabindex="6" />
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="returnDate">Return Date</label>
                                                <input 
                                                    type="date" 
                                                    class="form-control formInput" 
                                                    id="returnDate" 
                                                    name="returnDate" 
                                                    placeholder="" 
                                                    tabindex="7" />
                                            </div>
                                            </div>

                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="penaltyDay">Penalty Days</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="penaltyDay" 
                                                    name="penaltyDay" 
                                                    placeholder="Penalty Days" t
                                                    tabindex="8" 
                                                    required />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="penaltyCharge">Penalty Charge</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="penaltyCharge" 
                                                    name="penaltyCharge" 
                                                    placeholder="Penalty Charge" 
                                                    tabindex="9" 
                                                    required />
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="advancedPayment">Advanced Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="advancedPayment" 
                                                    name="advancedPayment" 
                                                    placeholder="Advanced Payment" 
                                                    tabindex="10" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="TotalreservationPrice">Total Reservation Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="TotalreservationPrice" 
                                                    name="TotalreservationPrice" 
                                                    placeholder="Total Reservation Payment" 
                                                    tabindex="11" />
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="reservationPrice">Remaining Reservation Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="reservationPrice" 
                                                    name="reservationPrice" 
                                                    placeholder="Remaining Reservation Payment" 
                                                    tabindex="11" />
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn btn-ok">
                                                        Update
                                                    </button>
                                                </div>
                                                <div className="col py-3 text-center">
                                                    <button type="reset" className="btn btn-reset">
                                                        Cancel
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

export default Updatereservation
