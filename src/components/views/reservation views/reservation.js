import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory, Link} from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

function Reservation() {


    // disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday)
    }

     //disable future dates
    const today = moment().add(30, 'days');;
    const disableFutureDt = current => {
        return current.isBefore(today)
    }

    let history = useHistory();

    const[customername,setcustomername] = useState("");
    const[contactnumber,setcontactnumber] = useState("");
    const[nic,setnic] = useState("");
    const[customernic,setcustomernic] = useState("");
    const[customeraddress,setcustomeraddress] = useState("");
    const[packagename,setpackagename] = useState("");
    const[eventtype,seteventtype] = useState("");
    const[from,setfrom] = useState(moment());
    const[to,setto] = useState(moment());
    const[discount,setdiscount] = useState("");
    const[advancedpayment,setadvancedpayment] = useState("");
    const[totalreservation,settotalreservation] = useState("");
    const[status,setstatus] = useState("");

    //const[ResNoErr,setRegNoErr] = useState("");

    function sendData(e){
        e.preventDefault();

        document.getElementById('FinalreservationPrice').value = (totalreservation - advancedpayment);

        const finalpay = (totalreservation - advancedpayment);

        alert("Your ramaining balance is " + `${finalpay}`);
        //const isValid = formValidation();
        //if(isValid){
        const answer = window.confirm("Are you sure you want to confirm submission?");
        if (answer) {
          const newReservation = { customername, contactnumber, nic,customernic, customeraddress, packagename,eventtype, from, to, discount, advancedpayment, totalreservation, status}
    
          axios.post("http://localhost:4000/reservations/addReservation", newReservation).then(() => {
            alert("Reservation added successfully")
            function refreshPage() {
              window.location.reload();
            }
            refreshPage();
    
          }).catch((err) => {
            alert(err.response.data.error)

    
          })
        }//}
        
      }

      //const [vehicles, setVehicles] = useState([]);

     { /*useEffect(() => {
          axios.get("http://localhost:4000/vehicle/view").then((res) => {
              console.log(res.data);
              setVehicles(res.data);
          }).catch((error) => {
              alert(error.message);
          })
      }, []);*/}

      {/*const formValidation =() =>{
          const ResNoErr ={};
          let isValid = true;

          if(contactnumber.trim().length>10 && contactnumber.trim().length <10){
              ResNoErr.InValidRegNo = "* Invalid Number ";
              isValid = false;
          }

          setRegNoErr(ResNoErr);
          return isValid;
      }*/}

      function addtemporaryilyData(e) {
            e.preventDefault();

            document.getElementById('reservationPrice').value = totalreservation;
            document.getElementById('select').value = packagename;

            var admission = moment(from, 'DD-MM-YYYY');
            var discharge = moment(to, 'DD-MM-YYYY');
            const diffDuration = discharge.diff(admission, 'days');
            document.getElementById('dateRange').value = diffDuration;



        alert("Package Created");   
      }

    function showDelivery(){
       
        if(document.getElementById("entry").click) {
            document.getElementById("hide11").style.display = "block";
            document.getElementById("hide22").style.display = "block";
            document.getElementById("hide33").style.display = "block";
            document.getElementById("hide44").style.display = "block";
         
        }
    }

    
     
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
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" >Package</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div className="tab-content-emp"></div>
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      
                            <div class="container">  
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form onSubmit={sendData} id="contact-form" class="form"  >
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
                                                    placeholder="Full Name" 
                                                    tabindex="1" 
                                                    //required 
                                                    onChange={(event) => 
                                                        {
                                                            setcustomername(event.target.value);
                                                        }
                                                    }/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="customerNic">Customer NIC</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customerNic" 
                                                    name="customerNic" 
                                                    placeholder="Customer NIC - 985732984V" 
                                                    tabindex="1" 
                                                    required 
                                                    //pattern="V[0-9]{10}"
                                                    onChange={(event) => 
                                                        {
                                                            setcustomernic(event.target.value);
                                                        }
                                                    }/>

                                                    
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="contactNo">Contact Number</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="contactNo" 
                                                    name="contactNo" 
                                                    placeholder="Contact Number(0703814914)" t
                                                    abindex="2" 
                                                    required 
                                                    pattern="[0-9]{10}"
                                                    onChange={(event) => 
                                                        {
                                                            setcontactnumber(event.target.value);
                                                        }
                                                    }/>
                                                    {/*{Object.keys(ResNoErr).map((key) => {
                                                        return<div style={{color :"red"}}>{ResNoErr[key]}</div>
                                                    })}*/}
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="nic">NIC</label>
                                                <input 
                                                    type="file" 
                                                    class="form-control formInput" 
                                                    id="nic" 
                                                    name="nic" 
                                                    placeholder="NIC (965169472v)" 
                                                    tabindex="3"                                               
                                                    //required
                                                    onChange={(event) => 
                                                        {
                                                            setnic(event.target.value);
                                                        }
                                                    }/>
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
                                                    tabindex="4" 
                                                    //required
                                                    onChange={(event) => 
                                                        {
                                                            setcustomeraddress(event.target.value);
                                                        }
                                                    }/>
                                            </div>
                                            <div class="row">
                                            <br></br>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h3 className="text-left mt-4 mb-4 reservesize">Reservation Details</h3>
                                                </div>
                                            </div>
                                              <div class="form-group">
                                            <label class="form-label-emp" for="select">Package Name</label>
                                            <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="select" 
                                                    name="select" 
                                                    placeholder="Event Type (Wedding)" 
                                                    tabindex="7" 
                                                    required 
                                                    />
                                    
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="eventType">Event Type</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="eventType" 
                                                    name="eventType" 
                                                    placeholder="Event Type (Wedding)" 
                                                    tabindex="7" 
                                                    //required 
                                                    onChange={(event) => 
                                                        {
                                                            seteventtype(event.target.value);
                                                        }
                                                    }/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="status">Status</label>
                                                <select
                                                        id="status"
                                                        className="form-control "
                                                        onChange={(event) => 
                                                            {
                                                                setstatus(event.target.value);
                                                            }
                                                        }
                                                    
                                                    >
                                                        <option id="pending">Select</option>
                                                        <option id="pending">Pending</option>
                                                        <option id="complete">Complete</option>
                                                    </select>
                                            </div>                                           
                                            </div>      
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="advancedPayment" >Advanced Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="advancedPayment" 
                                                    name="advancedPayment" 
                                                    placeholder="Advanced Payment (10000.00)" 
                                                    tabindex="9" 
                                                    onChange={(event) => 
                                                        {
                                                            setadvancedpayment(event.target.value);
                                                        }
                                                    }/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="reservationPrice">Total Reservation Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="reservationPrice" 
                                                    name="reservationPrice" 
                                                    placeholder="Total Reservation Price (25000.00)" 
                                                    tabindex="10" 
                                                    /*onChange={(event) => 
                                                        {
                                                            settotalreservation(event.target.value);
                                                        }
                                                    }*//>
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="FinalreservationPrice">Final Reservation Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="FinalreservationPrice" 
                                                    name="FinalreservationPrice" 
                                                    placeholder="Final Reservation Price (15000.00)" 
                                                    tabindex="11" 
                                                    /*onChange={(event) => 
                                                        {
                                                            setcustomername(event.target.value);
                                                        }
                                                    }*//>
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn btn-ok" >
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
                       
                    </div>
                    
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container">
                            <br></br>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form onSubmit={addtemporaryilyData} id="contact-form" class="form"  >
                                        <div class="form-group">
                                            <label class="form-label" for="packageName">Package Name</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="packageName" 
                                                name="packageName" 
                                                placeholder="Package Name" 
                                                tabindex="1" 
                                                required 
                                                onChange={(event) => 
                                                        {
                                                            setpackagename(event.target.value);
                                                        }
                                                    }/>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="from">From</label>
                                                <DatePicker  
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="from" 
                                                    name="from" 
                                                    placeholder="" 
                                                    tabindex="5" 
                                                    required 
                                                    onChange={(event) => 
                                                        {
                                                            setfrom(event);
                                                        }
                                                    }
                                                    timeFormat={false}
                                                    isValidDate={disablePastDt}
                                                    />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="to">To</label>
                                                <DatePicker 
                                                    required 
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="to" 
                                                    name="to" 
                                                    placeholder="" 
                                                    tabindex="6" 
                                                    onChange={(event) => 
                                                        {
                                                            setto(event);
                                                        }
                                                    }
                                                    timeFormat={false}
                                                    isValidDate={disablePastDt}
                                                    isValidDate={disableFutureDt}
                                                    />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label" for="dateRange">Date Range</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="dateRange" 
                                                name="dateRange" 
                                                placeholder="Date Range" 
                                                tabindex="2" 
                                                //pattern="[0-9]"
                                                />
                                        </div>
                                        </div>
                                        <br></br>
                                        <div class="form-group col-md-2">
                                                <input type="button" class="btn btn-info" id="entry" value=" Add Vehicles" onClick={showDelivery} onDoubleClick={showDelivery}/>
                                        </div>
                                        <div class="row" >
                                            <div class="form-group col-md-4"  id="hide1">
                                                <label class="form-label-emp" for="vehicleTypehide1">Vehicle Type</label>
                                                <select 
                                                        id="select"
                                                        className="form-control "
                                                        tabindex="3" 
                                                        //onChange={changeSelectOptionHandler}
                                                         > 
                                                        <option >Select</option>                                        
                                                        <option >Car</option>
                                                        <option >Van</option>
                                                        <option >Bus</option>
                                                        
                                                       {/* {optionss.map((option) => (
                                                                <option value={option.value}>{option.label}</option>
                                                            ))}*/}
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4"  id="hide2">
                                                <label class="form-label-emp" for="vehicleModelhide1">Vehicle Model</label>
                                                <select
                                                        id="vehicleModelhide1"
                                                        className="form-control "
                                                        tabindex="4" 
                                                         >
                                                

                                                        <option id="1">Select</option>
                                                        <option id="2">vitz</option>
                                                        <option id="3">hybrid</option>
                                                        <option id="4">Bus</option>

                                                    </select>
                                            </div>
                                            <div class="form-group col-md-2"  id="hide3">
                                                <label class="form-label-emp" for="noVehiclehide1">No of Vehicle</label>
                                                <input 
                                                    type="number" 
                                                    class="form-control formInput" 
                                                    id="noVehiclehide1" 
                                                    name="noVehiclehide1" 
                                                    placeholder="Count" 
                                                    min="1"
                                                    tabindex="5" 
                                                    pattern="[0-9]"
                                                    />
                                            </div>
                                            <div class="form-group col-md-2"  id="hide4" >
                                                <label class="form-label-emp" for="hide4price">Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="hide4price" 
                                                    name="hide4price" 
                                                    placeholder="Price" 
                                                    min="1"
                                                    tabindex="5" 
                                                    //pattern="[0-9]"
                                                    />
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-4" style={{ display: "none" }} id="hide11" >
                                                <label class="form-label-emp" for="vehicleTypehide2">Vehicle Type</label>
                                                <select 
                                                        id="vehicleTypehide2"
                                                        className="form-control "
                                                        tabindex="3" 
                                                       
                                                        >
                                                        {/*{optionss.map((option) => (
                                                                <option value={option.value}>{option.label}</option>
                                                            ))}*/}
                                                        <option >Select</option>
                                                        <option >Car</option>
                                                        <option>Van</option>
                                                        <option >Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4" style={{ display: "none" }} id="hide22">
                                                <label class="form-label-emp" for="vehicleModelhide2">Vehicle Model</label>
                                                <select
                                                        id="vehicleModelhide2"
                                                        className="form-control "
                                                        tabindex="4"  >
                                                        <option>Select</option>
                                                        <option>vitz</option>
                                                        <option>hybrid</option>
                                                        <option>Bus</option>
                                                        {/*<option id="1">Select</option>
                                                        <option id="2">vitz</option>
                                                        <option id="3">hybrid</option>
                                                        <option id="4">Bus</option>*/}
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-2" style={{ display: "none" }} id="hide33" >
                                                <label class="form-label-emp" for="noVehiclehide2">No of Vehicle</label>
                                                <input 
                                                    type="number" 
                                                    class="form-control formInput" 
                                                    id="noVehiclehide2" 
                                                    name="noVehiclehide2" 
                                                    placeholder="Count" 
                                                    min="1"
                                                    tabindex="5" 
                                                    pattern="[0-9]"
                                                    />
                                            </div>
                                            <div class="form-group col-md-2" style={{ display: "none" }} id="hide44" >
                                                <label class="form-label-emp" for="hide44price">Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="hide44price" 
                                                    name="hide44price" 
                                                    placeholder="Price" 
                                                    min="1"
                                                    tabindex="5" 
                                                    //pattern="[0-9]"
                                                    />
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
                                                placeholder="Discount (5)" 
                                                tabindex="6" 
                                                //pattern="[0-9]"
                                                //required 
                                                onChange={(event) => 
                                                        {
                                                            setdiscount(event.target.value);
                                                        }
                                                    }/>
                                        </div>
                                        </div>
                                        <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="form-label" for="totalPrice">Total Price</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="totalPrice" 
                                                name="totalPrice" 
                                                placeholder="Total Price (25000.00)" 
                                                tabindex="7" 
                                                //required 
                                                onChange={(event) => 
                                                        {
                                                            settotalreservation(event.target.value);
                                                        }
                                                    }/>
                                        </div>
                                        </div>
                                        <div className="row">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn btn-ok" /*onClick ="sendpackageName();"*/>
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

export default Reservation
