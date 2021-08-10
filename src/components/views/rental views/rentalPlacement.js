import React from 'react'


function rentalPlacement() {


    return (
        <div className="page-component-body ">
            <div class="container input-main-form">
                <h2>Rental Placement</h2>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Rental Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Customer Details</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form>
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="text-left mt-4 mb-4">Rental Details</h3>
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
                                                <button type="submit" class="btn btn-success mb-3">Send Message</button>
                                                <button type="submit" class="btn btn-warning mb-3 ml-5">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="text-left mt-4 mb-4">Contact</h3>
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
                                            <button type="submit" class="btn btn-success mb-3">Send Message</button>
                                            <button type="submit" class="btn btn-warning mb-3 ml-5">Send Message</button>
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

export default rentalPlacement
