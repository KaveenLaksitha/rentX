import React from 'react'

function updateVehicle() {
    return (
        <div className="page-component-body">
        <div class="container input-main-form-emp">
            <div class="tab-content-emp" id="myTabContent">
                <form>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-3 mb-4">Update Vehicle Details</h3>
                            </div>
                        </div>
                        <hr></hr>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="contact-form" class="form" action="#" method="POST" role="form">
                                <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-1 mb-4">Vehicle Details</h3>
                                </div>
                            </div>
                                    <div className="row">
                                       
                                        
                                            <div class="form-group ">
                                                
                                                <div  class =" row ml-1">
                                                <div class="col-6">
                                                    <label class="form-label-V mt-2" for="RegNo">Vehicle Registration Number  </label>
                                                </div>
                                                <div class="col-5">
                                                <input
                                                disabled
                                                id="regNo"
                                                type="text"
                                                className="form-control "
                                                placeholder="ABC-XXXX"
                                            // onChange={(e) => {
                                            // setfName(e.target.value);
                                            // }}
                                            />
                                                </div>
                                                </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="name">Vehicle Brand</label>
                                            <input type="text" class="form-control formInput" id="VehicleBrand" name="VehicleBrand" placeholder="eg : Toyota , Nissan" tabindex="1" required />
                                            
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="email">Vehicle Modal</label>
                                            <input type="email" class="form-control formInput" id="vehModal" name="vehModal"  placeholder=" eg : KDH, Axio " tabindex="2" required />
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="subject">Vehicle Type</label>
                                            <select
                                                    id="vehType"
                                                    className="form-control "
                                                // onChange={(e) => {
                                                // setMaritalStat(e.target.value);
                                                // }}
                                                >
                                                    <option id="car">Car</option>
                                                    <option id="van">Van</option>
                                                    <option id="bus">Bus</option>
                                                </select>
                                        </div>
                                    </div>


                                    <hr></hr>


                                    <div className="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="Ins">Insurance Type   </label>
      
                                                <select
                                                    id="Ins"
                                                    className="form-control "
                                                // onChange={(e) => {
                                                // setMaritalStat(e.target.value);
                                                // }}
                                                >
                                                    <option id="InsF">Full Insurance</option>
                                                    <option id="InsT">Third-party Insurance</option>
                                                    
                                                </select>
                                
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Insurance Company Name </label>
                                                <input required type="text" class="form-control formInput" id="InsCom" name="InsCom" placeholder="Insurance Company Name" tabindex="2" required />
                                            </div>
                                    </div>



                                    <div className="row">
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="name">Transmission</label>
                                            <select
                                                    id="Trans"
                                                    className="form-control "
                                                // onChange={(e) => {
                                                // setMaritalStat(e.target.value);
                                                // }}
                                                >
                                                    <option id="Auto">Auto </option>
                                                    <option id="Mannual">Mannual</option>
                
                                                </select>
                                            
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="Air COndition">Air Condition</label>
                                            

                                            <select
                                                    id="AirC"
                                                    className="form-control "
                                                // onChange={(e) => {
                                                // setMaritalStat(e.target.value);
                                                // }}
                                                >
                                                    <option id="FAC">Full - AC </option>
                                                    <option id="NAC">Non - AC </option>
                                                </select>
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="subject">Number of seats </label>
                                            <input type="text" class="form-control formInput" id="seat" name="seat"  placeholder=" Number of seats" tabindex="2" required />
                                        </div>
                                    </div>

                                    <hr></hr>

                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                              <h3 className="topic-V text-left mt-2 mb-4">Payment & Agreement Details</h3>
                                        </div>
                                     </div>

                                     <div className="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="RegNo">Rate Per Day  </label>
                                                <div  class =" row">
                                                <div class="col-1">
                                                    <label class="form-label-V mt-2" for="RegNo">Rs </label>
                                                </div>
                                                <div class="col-10">
                                                    <input required type="text" class="form-control formInput" id="regNo" name="Owner NIC" placeholder="0.00" tabindex="2" required />
                                                </div>
                                                </div>
                                                
                                                
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Years of Rental </label>
                                                <input  required type="text" class="form-control formInput" id="NoYears" name="NoYears" placeholder="Years of Rental" tabindex="3" />
                                            </div>
                                    </div>



                                    
                                    


                                    <div className="row">
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Photos of Vehicle</label>
                                            <input type="file" class="form-control-file pt-3" id="Photos" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Copy of Agreement</label>
                                            <input type="file" class="form-control-file pt-3" id="Agreement" />
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-4">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok">
                                                Submit
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset">
                                                reset
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

export default updateVehicle
