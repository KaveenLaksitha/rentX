import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory, Link} from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

function Reservation() {

    const [CarList, setCarList] = useState([]);
    const [BusList, setBusList] = useState([]);
    const [VanList, setVanList] = useState([]);

    useEffect(() => {

        function getCarList() {
            axios.get("http://localhost:4000/vehicle/searchVehicleModels/Car").then((res) => {
                setCarList(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }

        function getBusList() {
            axios.get("http://localhost:4000/vehicle/searchVehicleModels/Bus").then((res) => {
                setBusList(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }

        function getVanList() {
            axios.get("http://localhost:4000/vehicle/searchVehicleModels/Van").then((res) => {
                setVanList(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }

        getCarList();
        getBusList();
        getVanList();

    }, [])

    function populate() {
        var Stringsplit1 = CarList.split(',')
        var Stringsplit2 = VanList.split(",")
        var Stringsplit3 = BusList.split(",")

        var s1 = document.getElementById('vehicleType')
        var s2 = document.getElementById('vehicleModel')

        var arry1 = [Stringsplit1.length];

        for (var a = 0; a < Stringsplit1.length; a++) {
            arry1[a] = Stringsplit1[a].toLowerCase() + "|" + Stringsplit1[a];
        }
        arry1.unshift("choose|Choose");
        //alert(arry1)

        var arry2 = [Stringsplit2.length];

        for (var a = 0; a < Stringsplit2.length; a++) {
            arry2[a] = Stringsplit2[a].toLowerCase() + "|" + Stringsplit2[a];
        }
        arry2.unshift("choose|Choose");
        //alert(arry2)

        var arry3 = [Stringsplit3.length];

        for (var a = 0; a < Stringsplit3.length; a++) {
            arry3[a] = Stringsplit3[a].toLowerCase() + "|" + Stringsplit3[a];
        }
        arry3.unshift("choose|Choose");
        //alert(arry3)

        s2.innerjs = " ";
        if (s1.value == "Car") {
            var optionArray = arry1;
        } else if (s1.value == "Van") {
            var optionArray = arry2;
        } else if (s1.value == "Bus") {
            var optionArray = arry3;
        }

        for (var option in optionArray) {
            var pair = optionArray[option].split('|');
            var newoption = document.createElement("option")
            newoption.value = pair[0];
            newoption.innerHTML = pair[1];
            s2.options.add(newoption);


        }

    }

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

    const [vehicleType, setVehicleType] = useState("");
    const [model, setModel] = useState("");

    const [perDayCharge, setPerDayCharge] = useState("");

    const [PayErr, setPayErr] = useState("");

    //const[ResNoErr,setRegNoErr] = useState("");

    function sendData(e){
        e.preventDefault();

        document.getElementById('FinalreservationPrice').value = (totalreservation - advancedpayment);

        const finalpay = (totalreservation - advancedpayment);

        alert("Your ramaining balance is " + `${finalpay}`);
    
        const answer = window.confirm("Are you sure you want to confirm submission?");
        if (answer) {
          const newReservation = { customername, contactnumber, nic,customernic, customeraddress, packagename,eventtype, from, to, discount, advancedpayment, totalreservation, status}
    
          axios.post("http://localhost:4000/reservations/addReservation", newReservation).then(() => {
            alert("Reservation added successfully")
           
                    history.push("/viewReservation");
    
          }).catch((err) => {
            alert(err.response.data.error)

    
          })
        }
        
      }

        function getDateDiff() {
            var admission = moment(from, 'DD-MM-YYYY');
            var discharge = moment(to, 'DD-MM-YYYY');
            const diffDuration = discharge.diff(admission, 'days');
            return diffDuration;
        }
 
        function charge(){

            getRentChargePerDay();
            const pricepeday = (Number(document.getElementById('noVehiclehide1').value)) * perDayCharge * getDateDiff() ;
            return pricepeday;
        }

      function addtemporaryilyData(e) {
            e.preventDefault();

            //alert(vehicleType, model)
            //getRentChargePerDay();
            //alert(perDayCharge);
            console.log(perDayCharge);

            document.getElementById('dateRange').value = getDateDiff();
            document.getElementById('totalreservation').value = totalreservation;
            document.getElementById('packagename').value = packagename;
            document.getElementById('perDayCharge').value = charge() ;
            


        alert("Package Created");   
      }

      function getRentChargePerDay() {
        function getRent() {
            axios.get(`http://localhost:4000/vehicle/searchPerDayRentalPrice/${vehicleType}/${model}`).then((res) => {
                setPerDayCharge(res.data)
                console.log(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
        getRent();
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
                                                <label class="form-label" for="customername">Customer Name</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customername" 
                                                    name="customername" 
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
                                                <label class="form-label" for="customernic">Customer NIC</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customernic" 
                                                    name="customernic" 
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
                                                <label class="form-label" for="contactnumber">Contact Number</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="contactnumber" 
                                                    name="contactnumber" 
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
                                                <label class="form-label" for="customeraddress">Customer Address</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customeraddress" 
                                                    name="customeraddress" 
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
                                            <label class="form-label-emp" for="packagename">Package Name</label>
                                            <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="packagename" 
                                                    name="packagename" 
                                                    placeholder="Event Type (Wedding)" 
                                                    tabindex="7" 
                                                    required 
                                                    />
                                    
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="eventtype">Event Type</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="eventtype" 
                                                    name="eventtype" 
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
                                                <label class="form-label" for="advancedpayment" >Advanced Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="advancedpayment" 
                                                    name="advancedpayment" 
                                                    placeholder="Advanced Payment (10000.00)" 
                                                    tabindex="9" 
                                                    onChange={(event) => 
                                                        {
                                                            setadvancedpayment(event.target.value);
                                                        }
                                                    }
                                                    onFocus={getRentChargePerDay}/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="totalreservation">Total Reservation Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="totalreservation" 
                                                    name="totalreservation" 
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
                                                <label class="form-label-emp" for="vehicleType">Vehicle Type</label>
                                                <select 
                                                        id="vehicleType"
                                                        className="form-control "
                                                        tabindex="3" 
                                                        onChange={e => { setVehicleType(e.target.value); populate() }}
                                                        required
                                                    >
                                                        <option  >choose</option>
                                                        <option value="Car" >Car</option>
                                                        <option value="Van">Van</option>
                                                        <option value="Bus">Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4"  id="hide2">
                                                <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                <select
                                                        id="vehicleModel"
                                                        className="form-control "
                                                        tabindex="4" 
                                                         required
                                                         onChange={(event) => { setModel(event.target.value); }}>>                                            
                                                        
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
                                                <label class="form-label-emp" for="perDayCharge">Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="perDayCharge" 
                                                    name="perDayCharge" 
                                                    placeholder="Price"         
                                                    tabindex="5" 
                                                    //pattern="[0-9]"
                                                    />
                                            </div>
                                            
                                        </div>
                                        {/*<div class="row">
                                            <div class="form-group col-md-4" style={{ display: "none" }} id="hide11" >
                                                <label class="form-label-emp" for="vehicleType">Vehicle Type</label>
                                                <select 
                                                        id="vehicleType"
                                                        className="form-control "
                                                        tabindex="3" 
                                                       onChange={ populate() }
                                                        >
                                                    
                                                        <option >Choose</option>
                                                        <option >Car</option>
                                                        <option>Van</option>
                                                        <option >Bus</option>
                                                    </select>
                                            </div>
                                            <div class="form-group col-md-4" style={{ display: "none" }} id="hide22">
                                                <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                <select
                                                        id="vehicleModel"
                                                        className="form-control "
                                                        tabindex="4"  >
                                                        
                                                
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
                                                <label class="form-label-emp" for="perDayCharge">Price</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="perDayCharge" 
                                                    name="perDayCharge" 
                                                    placeholder="Price" 
                                                    min="1"
                                                    tabindex="5" 
                                                    //pattern="[0-9]"
                                                    />
                                            </div>
                                            
                                        </div>*/}
            
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
