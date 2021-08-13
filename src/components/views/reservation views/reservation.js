import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory, Link} from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

function Reservation() {
const yesterday = moment().subtract(1, 'day');

        // disable past dates
    const day = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday)
    }

    let history = useHistory();
    const [reservations , setReservations] = useState("");

    const[reservationid , setreservationid] = useState("");
    const[customername,setcustomername] = useState("");
    const[contactnumber,setcontactnumber] = useState("");
    const[nic,setnic] = useState("");
    const[customeraddress,setcustomeraddress] = useState("");
    const[packagename,setpackagename] = useState("");
    const[eventtype,seteventtype] = useState("");
    const[vehicletype,setvehicletype] = useState("");
    const[vehiclemodel,setvehiclemodel] = useState("");
    const[noofvehicle,setnoofvehicle] = useState("");
    const[from,setfrom] = useState(moment());
    const[to,setto] = useState(moment());
    const[daterange,setdaterange] = useState("");
    const[discount,setdiscount] = useState("");
    const[advancedpayment,setadvancedpayment] = useState("");
    const[totalreservation,settotalreservation] = useState("");
    const[status,setstatus] = useState("");
    const[select,setselect] = useState("");

    function sendData(e){
        e.preventDefault();

        //alert( customername+ contactnumber+ nic+ customeraddress+ packagename+eventtype+ from+ to+ daterange+ discount+ advancedpayment+ totalreservation+ status);

        const answer = window.confirm("Are you sure you want to confirm submission?");
        if (answer) {
          const newReservation = { customername, contactnumber, nic, customeraddress, packagename,eventtype, from, to, daterange, discount, advancedpayment, totalreservation, status}
    
          axios.post("http://localhost:4000/reservations/addReservation", newReservation).then(() => {
            alert("Reservation added successfully")
            function refreshPage() {
              window.location.reload();
            }
            refreshPage();
    
          }).catch((err) => {
            alert(err.response.data.error)

    
          })
        }

      }

    /*function sendpackageName(){
      var   select = document.getElementById("select"),
              txtpackage = document.getElementById("packageName"),
              newoption = document.createElement("OPTION"),
              newoptionval = document.createTextNode(txtpackage);

        newoption.appendChild(newoptionval);
        select.insertBefore(newoptionval, select.lastChild);

    }*/

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
                      
                            <div class="container">  
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form onSubmit={sendData} id="contact-form" class="form"   role="form">
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
                                                    onChange={(event) => 
                                                        {
                                                            setcontactnumber(event.target.value);
                                                        }
                                                    }/>
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
                                                    //required 
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
                                                    />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="status">Status</label>
                                                <select
                                                        id="status"
                                                        className="form-control "
                                                        onChange={(event) => 
                                                            {
                                                                setstatus(event.target.value);
                                                            }
                                                        }
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
                                            </div>
                                            <div class="form-group">
                                            <label class="form-label-emp" for="select">Package Name</label>
                                                <select
                                                        id="select"
                                                        className="form-control "
                                                        tabindex="8"
                                                    >
                                                        <option >option1</option>
                                                        <option >option2</option>
                                                    </select>
                                            </div>
                                            
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="advancedPayment">Advanced Payment</label>
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
                                                <label class="form-label" for="reservationPrice">Total Reservation Price</label>
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
                       
                    </div>
                    
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container">
                            <br></br>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form  id="contact-form" class="form"  role="form">
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
                                        <div class="form-group">
                                            <label class="form-label" for="dateRange">Date Range</label>
                                            <input 
                                                type="text" 
                                                class="form-control formInput" 
                                                id="dateRange" 
                                                name="dateRange" 
                                                placeholder="Date Range" 
                                                tabindex="2" 
                                                //required 
                                                onChange={(event) => 
                                                        {
                                                            setdaterange(event.target.value);
                                                        }
                                                    }/>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="vehicleType">Vehicle Type</label>
                                                <select 
                                                        id="vehicleType"
                                                        className="form-control "
                                                        tabindex="3" 
                                                        /*onChange={(event) => 
                                                        {
                                                            setvehicletype(event.target.value);
                                                        }
                                                    }*/
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option value="1">Car</option>
                                                        <option value="2">Van</option>
                                                        <option value="3">Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                <select
                                                        id="vehicleModel"
                                                        className="form-control "
                                                        tabindex="4" 
                                                        /*onChange={(event) => 
                                                        {
                                                            setvehiclemodel(event.target.value);
                                                        }
                                                    }*/
                                                    // onChange={(e) => {
                                                    // setMaritalStat(e.target.value);
                                                    // }}
                                                    >
                                                        <option id="married">vitz</option>
                                                        <option id="unmarried">hybrid</option>
                                                        <option id="unmarried">Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="noVehicle">No of Vehicle</label>
                                                <input 
                                                    type="number" 
                                                    class="form-control formInput" 
                                                    id="noVehicle" 
                                                    name="noVehicle" 
                                                    placeholder="No of Vehicle" 
                                                    min="1"
                                                    tabindex="5" 
                                                    /*onChange={(event) => 
                                                        {
                                                            setnoofvehicle(event.target.value);
                                                        }
                                                    }*//>
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
