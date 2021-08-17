import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


 function ReservationReport() {

    return (
            <div className="page-component-body">
                <div class="container input-main-form-emp">
                    <div class="tab-content-emp" id="myTabContent">
                        
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                       <form>
                                        <center>
                                        <h3 className=" mt-3 mb-4">Generate Report on Vehicle Records </h3>
                                        </center>
                                        <hr></hr>
                                        </form>
                                    </div>
                                </div>
                                <br></br>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" >
                                    <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="from">From</label>
                                                <DatePicker  
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="from" 
                                                    name="from" 
                                                    placeholder="" 
                                                    tabindex="5" 
                                                    required 
                                                   
                                                    />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="to">To</label>
                                                <DatePicker 
                                                    required 
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="to" 
                                                    name="to" 
                                                    placeholder="" 
                                                    tabindex="6" 
                                                    timeFormat={false}
                                                    
                                                    
                                                    />
                                            </div> 
                                            </div>

                                            <br></br>

                                            <div class="form-group">
                                                <label class="form-label-emp" for="customeraddress">Type</label>
                                                <select 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customeraddress" 
                                                    name="customeraddress" 
                                                    placeholder="Customer Address" 
                                                    tabindex="4" 
                                                    //required
                                                    />
                                            </div>

                                            <br></br>

                                            <div class="form-group">
                                                <label class="form-label-emp" for="customeraddress">Brand</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customeraddress" 
                                                    name="customeraddress" 
                                                    placeholder="" 
                                                    tabindex="4" 
                                                    //required
                                                    />
                                            </div>
                                        <br></br>
                                        <div className="row">
                                        <div className="form-group col-md-4">
                                        <label class="form-label-emp" for="customeraddress">Years of Rental</label>
                                                <input 
                                                    type="number" 
                                                    class="form-control formInput" 
                                                    id="customeraddress" 
                                                    name="customeraddress" 
                                                    placeholder="" 
                                                    tabindex="4" 
                                                    //required
                                                    />

                                        </div>
                                        
                                    </div>

                                    <div className="row">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn btn-ok" >
                                                        Generate
                                                    </button>
                                                </div>
                                                
                                            </div>
                                            <br></br>
                                            </form>
                                    </div>
                                   
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

export default ReservationReport;
