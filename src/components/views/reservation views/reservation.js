import React from 'react'


function reservation() {


    return (
        <div className="page-component-body ">
            
            <div class="container input-main-form-emp">
                <br></br>
                <h2> Event Reservation</h2>
                <br></br>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Reservation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Package</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div className="tab-content-emp"></div>
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form>
                            <div class="container">  
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" class="form" action="#" method="POST" role="form">
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h3 className="text-left mt-4 mb-3 h3size">Customer Details</h3>
                                                    <hr></hr>
                                                </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="customer_name">Customer Name</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customer_name" 
                                                    name="customer_name" 
                                                    placeholder="Customer Name" 
                                                    tabindex="1" 
                                                    required />
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="contact_no">Contact Number</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="contact_no" 
                                                    name="contact_no" 
                                                    placeholder="Contact Number" t
                                                    abindex="2" 
                                                    required />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="nic">NIC</label>
                                                <input 
                                                    type="file" 
                                                    class="form-control formInput" 
                                                    id="nic" 
                                                    name="nic" 
                                                    placeholder="NIC" 
                                                    tabindex="3" 
                                                    required/>
                                            </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="customer_address">Customer Address</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customer_address" 
                                                    name="customer_address" 
                                                    placeholder="Customer Address" 
                                                    tabindex="4" 
                                                    required/>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h3 className="text-left mt-4 mb-4 h3size">Reservation Details</h3>
                                                    <hr></hr>
                                                </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="from">From</label>
                                                <input 
                                                    type="date" 
                                                    class="form-control formInput" 
                                                    id="from" 
                                                    name="from" 
                                                    placeholder="" t
                                                    abindex="5" 
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
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="status">Status</label>
                                                <select
                                                        id="status"
                                                        className="form-control "
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="pending">Pending</option>
                                                        <option id="complete">Complete</option>
                                                    </select>
                                            </div>
                                            </div>

                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="event_type">Event Type</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="event_type" 
                                                    name="event_type" 
                                                    placeholder="Event Type" 
                                                    tabindex="7" 
                                                    required />
                                            </div>
                                            </div>
                                            <div class="form-group">
                                            <label class="form-label-emp" for="package_name">Package Name</label>
                                                <select
                                                        id="package_name"
                                                        className="form-control "
                                                        tabindex="8" 
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="select">Select</option>
                                                    </select>
                                            </div>
                                            
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="advanced_payment">Advanced Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="advanced_payment" 
                                                    name="advanced_payment" 
                                                    placeholder="Advanced Payment" 
                                                    tabindex="9" />
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="reservation_price">Total Reservation Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="reservation_price" 
                                                    name="reservation_price" 
                                                    placeholder="Total Reservation Price" 
                                                    tabindex="10" />
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn btn-ok">
                                                        Reserve
                                                    </button>
                                                </div>
                                                <div className="col py-3 text-center">
                                                    <button type="reset" className="btn btn-reset">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container">
                            <br></br>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" action="#" method="POST" role="form">
                                        <div class="form-group">
                                            <label class="form-label" for="package_name">Package Name</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="package_name" 
                                                name="package_name" 
                                                placeholder="Package Name" 
                                                tabindex="1" 
                                                required />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="date_range">Date Range</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="date_range" 
                                                name="date_range" 
                                                placeholder="Date Range" 
                                                tabindex="2" 
                                                required />
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="vehicle_type">Vehicle Type</label>
                                                <select
                                                        id="vehicle_type"
                                                        className="form-control "
                                                        tabindex="3" 
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="car">Car</option>
                                                        <option id="van">Van</option>
                                                        <option id="bus">Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="vehicle_model">Vehicle Model</label>
                                                <select
                                                        id="vehicle_model"
                                                        className="form-control "
                                                        tabindex="4" 
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="married">Car</option>
                                                        <option id="unmarried">Van</option>
                                                        <option id="unmarried">Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="no_vehicle">No of Vehicle</label>
                                                <input 
                                                    type="number" 
                                                    class="form-control formInput" 
                                                    id="no_vehicle" 
                                                    name="no_vehicle" 
                                                    placeholder="No of Vehicle" 
                                                    min="1"
                                                    tabindex="5" />
                                            </div>
                                        </div>
                                        <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="form-label" for="discount">Discount</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="discount" 
                                                name="discount" 
                                                placeholder="Discount" 
                                                tabindex="6" 
                                                required />
                                        </div>
                                        </div>
                                        <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="form-label" for="total_price">Total Price</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="total_price" 
                                                name="total_price" 
                                                placeholder="Total Price" 
                                                tabindex="7" 
                                                required />
                                        </div>
                                        </div>
                                        <div className="row">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn btn-ok">
                                                        Create
                                                    </button>
                                                </div>
                                                <div className="col py-3 text-center">
                                                    <button type="reset" className="btn btn-reset">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                    </form>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    
    )
}

export default reservation
