import React, { useState } from 'react'
import axios from "axios"


function AddVehicle() {

    //state
    const[OwnerName, setOwnerName] = useState("");
    const[OwnerNIC, setOwnerNIC]  = useState("");
    const[TeleNo, setTeleNo ] = useState("");
    const[Address, setAddress] = useState("");
    const[Email, setEmail] = useState("");
    const[Date, setDate] = useState("");
    const[VehicleRegNo, setRegNo] = useState("");
    const[VehicleModel, setVehicleModel] = useState("");
    const[VehicleType, setVehicleType] = useState("");
    const[VehicleBrand, setVehicleVBrand] = useState("");
    const[Mileage, setMileage] = useState("");
    const[InsType, setInstType] = useState("");
    const[InsComName, setComName] = useState("");
    const[Transmission, setTransmission] = useState("");
    const[AirC, setAirC] = useState("");
    const[NoOfSeats, setNoOfSeats] = useState("");
    const[RatePDay, setRatePDay] = useState("");
    const[YearsRent, setYearsRent] = useState("");
    const[vehPic, setVehiPic] = useState("");
    const[vehDoc, setVehDoc] = useState("");

    const[RegNoErr, setRegNoErr] = useState("");
    const[TeleErr, setTeleNoErr] = useState("");
    const [NICErr, setNICErr] = useState("");

    // const[File, setFile] = useState('');
    // const [fileName, setfileName] = useState('');
    // const [uploadFiles, setUploadFile] = useState[{}];


    

    

    function sendData(e) {

        e.preventDefault();

        const isValid = formValidation();
        const teleValid = TeleValidation();
        const NICValid  = NICValidation();


        if(isValid && teleValid && NICValid){

            

        
        const newVehicle = {
            
            OwnerName,
            OwnerNIC,
            TeleNo,
            Address,
            Email,
            Date,
            VehicleRegNo,
            VehicleModel,
            VehicleType,
            VehicleBrand,
            Mileage,
            InsType,
            InsComName,
            Transmission,
            AirC,
            NoOfSeats,
            RatePDay,
            RatePDay,
            YearsRent,
            vehPic,
            vehDoc


        }

        axios.post("http://localhost:4000/vehicle/addVehicle", newVehicle)

        .then(() => {
            alert("Vehicle added Successfully !!")

        }).catch((err) => {
            alert(err)
        })

    }
}

    const formValidation =() =>{//validate function

        const RegNoErr ={}; //State
        let isValid = true; //setting flag


        if(VehicleRegNo.trim().length > 8){

            RegNoErr.InValidRegNo =" *Invalid Vehicle Registraton Number"; // error msg
            alert("**Invalid Vehicle Registration Number");
            isValid = false;
        }else if(VehicleRegNo.trim().length < 7){
            RegNoErr.InValidRegNo =" *Invalid Vehicle Registraton Number"; // error msg
            isValid = false;
        }
        
        
        setRegNoErr(RegNoErr);//update error objects
        return isValid;


    }


    const TeleValidation =() =>{//validate function

        const TeleErr ={}; //State
        let teleValid = true; //setting flag


        if( TeleNo.trim().length > 10 ){

            TeleErr.InValidTeleNo =" *Invalid Telephone Number"; // error msg
            alert("**Invalid Telephone Number");
            teleValid = false;
        }else if(TeleNo.trim().length < 10){
            TeleErr.InValidTeleNo =" *Invalid Telephone Number"; // error msg
            alert("**Invalid Telephone Number");
            teleValid = false;
        }
        
        
        setTeleNoErr(TeleErr);//update error objects
        
        return teleValid;


    }

        //validate function
     const NICValidation = () => {

            const NICErr = {}; //State
            let NICValid = true; //setting flag
    
    
            if (OwnerNIC.trim().length > 12) {
    
                NICErr.InValidNIC = " Invalid NIC Number"; // error msg
                alert("**Invalid NIC Number");
                NICValid = false;
            } else if (OwnerNIC.trim().length < 10) {
                NICErr.InValidNIC = " Invalid NIC Number"; // error msg
                alert("**Invalid NIC Number");
                NICValid = false;
            }
    
    
            setNICErr(NICErr);//update error objects
            return NICValid;
    
    
    }


    
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };

    
    const [isMobileValid, setMobileIsValid] = useState(false);
    const [Mobilemessage, setMobileMessage] = useState('');

    const MobileRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateMobile = (event) => {
        const mobile = event.target.value;
        if (MobileRegex.test(mobile)) {
            setMobileIsValid(true);
            setMobileMessage('Your Mobile Number looks good!');
        } else {
            setMobileIsValid(false);
            setMobileMessage('Please enter a valid Mobile Number!');
        }
    };


    const [isNICValid, setNICIsValid] = useState(false);
    const [NICmessage, setNICMessage] = useState('');

    const NICRegex1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V]$/;
    const NICRegex2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateNIC = (event) => {
        const NIC = event.target.value;
        if (NICRegex1.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        }else if(NICRegex2.test(NIC)){
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!'); 
        } else {
            setNICIsValid(false);
            setNICMessage('Please enter a valid NIC Number!');
        }
    };

    const [isRegValid, setRegIsValid] = useState(false);
    const [Regmessage, setRegMessage] = useState('');

    const VehRegex1 = /^[A-Z0-9]+-[0-9][0-9][0-9][0-9]$/;
    // const VehRegex2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateRegNo = (event) => {
        const RegNo = event.target.value;
        if (VehRegex1.test(RegNo)) {
            setRegIsValid(true);
            setRegMessage('Vehicle Registation Number looks good!');
        }else {
            setRegIsValid(false);
            setRegMessage('Please enter a valid Vehicle Registation Number Number!');
        }
    };

    





    








    return (
        <div className="page-component-body ">
            
            <div class="container input-main-form-emp pt-3">
            <h2 class ="pb-2 pl-3">Add vehicle details</h2>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Owner Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Vehicle Paymnet Details</a>
                    </li>
                    
                   <hr></hr>
                                            
                    
                
                <div class="tab-content tab-content-V  col-12" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        
                            <div class="container border-top">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="topic-V text-left mt-4 mb-4">Owner Details</h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" class="form" role="form" >
                                            <div class="form-group">
                                                <label class="form-label" for="name">Owner Name </label>
                                                <input  type="text" class="form-control formInput" id="name" name="name" placeholder="Customer Name" tabindex="1"
                                                    onChange={(e) => {
                                                        setOwnerName(e.target.value); // assign value
                                                         }}
                                                
                    
                                                />
                                            
                                            </div>

                                            <div className="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="email">Owner NIC </label>
                                                <input  type="text" class="form-control formInput" id="NIC" name="Owner NIC" placeholder="Owner NIC" tabindex="2"  
                                                
                                                        onChange={(e) => {
                                                            setOwnerNIC(e.target.value); // assign value
                                                            validateNIC(e);
                                                            }}
                                                        
                                                />
                                                 <div className={`message ${isNICValid ? 'success' : 'error'}`}>
                                                {NICmessage}
                                                </div>
                                            {Object.keys(NICErr).map((key) => {
                                                // return <div style={{ color: "red" }}>{NICErr[key]}</div>
                                            })}

                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="subject">Telephone No</label>
                                                <input  type="text" class="form-control formInput" id="TelNo" name="TelNo" placeholder="Telephone No" tabindex="3"
                                                
                                                onChange={(e) => {
                                                    setTeleNo(e.target.value); // assign value
                                                    validateMobile(e);
                                                     }}

                                                />
                                                <div className={`message ${isMobileValid ? 'success' : 'error'}`}>
                                                {Mobilemessage}
                                                </div>

                                                    {Object.keys(TeleErr).map((key)=>{
                                                        // return<div className ={message}>{TeleErr[key]}</div>
                                                    })}
                                            </div>
                                            </div>
                                            <div class="form-group ">
                                                <label class="form-label" for="subject">Address</label>
                                                <input  type="text" class="form-control formInput" id="Addr" name="Addr" placeholder="Address" tabindex="3" 
                                                
                                                
                                                onChange={(e) => {
                                                    setAddress(e.target.value); // assign value
                                                     }}

                                                />
                                            </div>
                                            
                                            <div class="form-group ">
                                                <label class="form-label" for="subject">E-mail</label>
                                                <input type="email" class="form-control formInput" id="Email" name="Email" placeholder="E-mail" tabindex="3" 
                                                
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    validateEmail(e);
                                                     // assign value
                                                     }}
                                                
                                                />
                                            <div className={`message ${isValid ? 'success' : 'error'}`}>
                                                {message}
                                            </div>
                                            </div>
                                            <div class="form-group ">
                                                <label class="form-label" for="date">Date</label>
                                                <input type="date" class="form-control" id="date" name="date" placeholder="Date" tabindex="3"                                                
                                                onChange={(e) => {
                                                    setDate(e.target.value); // assign value
                                                     }}
                                                
                                                />
                                            </div>
                                            
                                            
                                            <div className="row pt-3 pb-4">
                                            <div className="col py-3 text-center">



                                                        







                                            {/* <a  id="profile-tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                             <button  className="btn btn-ok" >
                                                     console.alert("")
                                            </button>
                                            </a> */}




                                            <li>
                                                <a class="btn btn-ok-V" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Next</a>
                                            </li>
                                            

                                           

                                                
                                                
                                                
                                                
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
                        


                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container border-top">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-4 mb-4">Vehicle Details</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form"   role="form"  onSubmit={sendData} >
                                    <div className="row">
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="name">Vehicle Brand</label>
                                            <input type="text" class="form-control formInput" id="VehicleBrand" name="VehicleBrand" placeholder="eg : Toyota , Nissan" tabindex="1" 

                                                                onChange={(e) => {
                                                                    setVehicleVBrand(e.target.value); // assign value
                                                                    }}  
           
                                            />
                                            
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="email">Vehicle Modal</label>
                                            <input type="text" class="form-control formInput" id="vehModal" name="vehModal"  placeholder=" eg : KDH, Axio " tabindex="2" 
                                            
                                            onChange={(e) => {
                                                setVehicleModel(e.target.value); // assign value
                                                 }}
                                            
                                            />
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="subject">Vehicle Type</label>
                                            <select
                                                    id="vehType"
                                                    className="form-control "
                                                    onChange={(e) => {
                                                        setVehicleType(e.target.value); // assign value
                                                         }}
                                                >
                                                    <option id="choose1">Choose</option>
                                                    <option value="car">Car</option>
                                                    <option value="van">Van</option>
                                                    <option value="bus">Bus</option>
                                                </select>
                                        </div>
                                    </div>

                                    

                                    <div className="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="RegNo">Vehicle Registration Number  </label>
                                                <input  type="text" class="form-control formInput" id="regNo" name="Owner NIC" placeholder="ABC-XXXX" tabindex="2"  
                                                
                                                    onChange={(e) => {
                                                        setRegNo(e.target.value); // assign value
                                                        validateRegNo(e);

                                                     }}
                                                     />
                                                     <div className={`message ${isRegValid ? 'success' : 'error'}`}>
                                                     {Regmessage}
                                                    </div>
                                                         
                                                
                                                
                                            
                                            {Object.keys(RegNoErr).map((key)=>{
                                                // return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                                            })}
                                            </div>


                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Current Mileage (Km) </label>
                                                <input   type="text" class="form-control formInput" id="TelNo" name="TelNo" placeholder="Mileage" tabindex="3"

                                                            onChange={(e) => {
                                                                setMileage(e.target.value); // assign value
                                                            }}
     
                                                />
                                            </div>
                                    </div>
                                    

                                    <div className="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="Ins">Insurance Type   </label>
      
                                                <select
                                                    id="Ins"
                                                    className="form-control "
                                                onChange={(e) => {
                                                    setInstType(e.target.value);
                                                }}
                                                >
                                                    <option id="choose2">Choose</option>
                                                    <option value="Full Insurance">Full Insurance</option>
                                                    <option value="Third-party Insurance">Third-party Insurance</option>
                                                    
                                                </select>
                                
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Insurance Company Name </label>
                                                <input  type="text" class="form-control formInput" id="InsCom" name="InsCom" placeholder="Insurance Company Name" tabindex="2" 

                                                            onChange={(e) => {
                                                                setComName(e.target.value);
                                                            }}
                                                
                                                />
                                            </div>
                                    </div>


                                    <div className="row">
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="name">Transmission</label>
                                            <select
                                                    id="Trans"
                                                    className="form-control "
                                                onChange={(e) => {
                                                    setTransmission(e.target.value);
                                                }}
                                                >
                                                    <option id="Chosse3">Choose</option>
                                                    <option value="Auto">Auto </option>
                                                    <option value="Mannual">Mannual</option>
                
                                                </select>
                                            
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="Air COndition">Air Condition</label>
                                            

                                            <select
                                                    id="AirC"
                                                    className="form-control "
                                                onChange={(e) => {
                                                    setAirC(e.target.value);
                                                }}
                                                >
                                                    <option id="choose4">Choose </option>
                                                    <option value="Full - AC">Full - AC </option>
                                                    <option value="Non - AC">Non - AC </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="subject">Number of seats </label>
                                            <input type="text" class="form-control formInput" id="seat" name="seat"  placeholder=" Number of seats" tabindex="2"  
                                            
                                            onChange={(e) => {
                                                setNoOfSeats(e.target.value);
                                            }}
                                            
                                            
                                            />
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
                                                    <input  type="text" class="form-control formInput" id="regNo" name="Owner NIC" placeholder="0.00" tabindex="2" 
                                                        
                                                        onChange={(e) => {
                                                            setRatePDay(e.target.value);
                                                        }}

                                                    />
                                                </div>
                                                </div>
                                                
                                                
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Years of Rental </label>
                                                <input   type="text" class="form-control formInput" id="NoYears" name="NoYears" placeholder="Years of Rental" tabindex="3"
                                                
                                                onChange={(e) => {
                                                    setYearsRent(e.target.value);
                                                }}

                                                
                                                />
                                            </div>
                                    </div>



                                    
                                    


                                    <div className="row">
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Photos of Vehicle</label>
                                            <input type="file" class="form-control-file pt-3" id="Photos"

                                                onChange={(e) => {
                                                    setVehiPic(e.target.value);
                                                }}
                                            
                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Copy of Agreement</label>
                                            <input type="file" class="form-control-file pt-3" id="Agreement"
                                                onChange={(e) => {
                                                    setVehDoc(e.target.value);
                                                }}
                                            
                                            
                                            />
                                        </div>
                                    </div>

                                        <div className="row mt-2 mb-3">
                                            <div className="col py-3 text-center">
                                                <button type="submit" className="btn btn-ok">
                                                    Save
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
                    </div>
                </div>
                </ul>
            
            </div>
        </div>
    )
}

export default AddVehicle

