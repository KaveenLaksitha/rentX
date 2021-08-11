import React from 'react'


function reservation() {


    return (
        
        <div className="page-component-body-new ">
            <div class="container input-main-form">
                <h2>Reservation</h2>
                <hr></hr><br></br>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Reservation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Package</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form>
                            <div class="container">
                                <div class="row">
                                    <div>
                                        <h4 className="text-left mt-2 mb-4 ml-2">Customer Details </h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" class="form" action="#" method="POST" role="form">
                                            <div class="form-group">
                                                <label class="form-label" for="name">Customer Name</label>
                                                <input type="text" class="form-control formInput" id="name" name="name" placeholder="Customer Name" tabindex="1" required />
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="email">Customer Address</label>
                                                <input type="email" class="form-control formInput" id="email" name="email" placeholder="Customer Address" tabindex="2" required />
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="subject">Contact Number</label>
                                                <input type="text" class="form-control formInput" id="subject" name="subject" placeholder="Contact Number" tabindex="3" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlFile1">NIC Soft Copy</label>
                                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                    <div>
                                        <h4 className="text-left mt-2 mb-4 ml-2">Reservation Details </h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" class="form" action="#" method="POST" role="form">
                                            <div class="form-group">
                                                <label class="form-label" for="name">Customer Name</label>
                                                <input type="text" class="form-control formInput" id="name" name="name" placeholder="Customer Name" tabindex="1" required />
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="email">Customer Address</label>
                                                <input type="email" class="form-control formInput" id="email" name="email" placeholder="Customer Address" tabindex="2" required />
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="subject">Contact Number</label>
                                                <input type="text" class="form-control formInput" id="subject" name="subject" placeholder="Contact Number" tabindex="3" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlFile1">NIC Soft Copy</label>
                                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                            <div class="text-left">
                                                <button type="submit" class="btn btn-create mb-3">Reserve</button>
                                                <button type="submit" class="btn btn-cancel mb-3 ml-5">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container">
                            {/*<div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-4 mb-4">Contact</h3>
                                </div>
                            </div>*/}
                            <br/><br/><br/>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" action="#" method="POST" role="form">
                                        <div class="form-group">
                                            <label class="form-label" for="name">Package Name</label>
                                            <input type="text" class="form-control formInput" id="name" name="name" placeholder="Package Name" tabindex="1" required />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="email">Date Range</label>
                                            <input type="email" class="form-control formInput" id="email" name="email" placeholder="Date Range" tabindex="2" required />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="subject">Vehicle Type</label>
                                            <input type="text" class="form-control formInput" id="subject" name="subject" placeholder="Vehicle Type" tabindex="3" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="name">Discount</label>
                                            <input type="text" class="form-control formInput" id="name" name="name" placeholder="Discount" tabindex="1" required />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="name">Total Price</label>
                                            <input type="text" class="form-control formInput" id="name" name="name" placeholder="Total Price" tabindex="1" required />
                                        </div>
                                        <div class="text-left">
                                            <button type="submit" class="btn btn-create mb-3">Create</button>
                                            <button type="submit" class="btn btn-cancel mb-3 ml-5">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default reservation
