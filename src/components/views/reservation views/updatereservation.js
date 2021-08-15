import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


 function Updatereservation() {

   {/* //disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday)
    }

     //disable future dates
    const today = moment().add(1, 'days');;
    const disableFutureDt = current => {
        return current.isBefore(today)
    }

*/}
    let history = useHistory();
    const { RID } = useParams();



    const[customername,setcustomername] = useState("");
    const[contactnumber,setcontactnumber] = useState("");
    const[nic,setnic] = useState("");
    const[customernic,setcustomernic] = useState("");
    const[customeraddress,setcustomeraddress] = useState("");
    const[packagename,setpackagename] = useState("");
    const[eventtype,seteventtype] = useState("");
    const[from,setfrom] = useState(moment());
    const[to,setto] = useState(moment());
    //const[from,setfrom] = useState("");
    //const[to,setto] = useState("");
    const[discount,setdiscount] = useState("");
    const[advancedpayment,setadvancedpayment] = useState("");
    const[totalreservation,settotalreservation] = useState("");
    const[status,setstatus] = useState("");

    useEffect(() => {
        loadReservation();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
    
    const answer = window.confirm("Are you sure you want to update the Reservation details?");
    
    if (answer) {

      const newReservation = {customername, contactnumber,nic,customernic, customeraddress,packagename,eventtype, from, to,discount, advancedpayment, totalreservation, status}
      await axios.put(`http://localhost:4000/reservations/updateReservation/${RID}`, newReservation).then(() => {
        alert("Reservation details successfully Updated");


      }).catch((err) => {
        alert(err.response.data.error);
      })

    } 
    } 
    const loadReservation = async () => {
       await axios.get(`http://localhost:4000/reservations/getReservation/${RID}`).then((res) => {
            console.log(res.data)
            setcustomername(res.data.reservation.customername);
            setcontactnumber(res.data.reservation.contactnumber);
            setnic(res.data.reservation.customernic);
            setcustomernic(res.data.reservation.nic);
            setcustomeraddress(res.data.reservation.customeraddress);
            setpackagename(res.data.reservation.packagename);
            seteventtype(res.data.reservation.eventtype);
            setfrom(res.data.reservation.from);
            setto(res.data.reservation.to);
            setdiscount(res.data.reservation.discount);
            setadvancedpayment(res.data.reservation.advancedpayment);
            settotalreservation(res.data.reservation.totalreservation);
            setstatus(res.data.reservation.status);

        }).catch((error) => {
            alert(error.message);
        })
       console.log("customer name", customername);

    };
    return (
            <div className="page-component-body">
                <div class="container input-main-form-emp">
                    <div class="tab-content-emp" id="myTabContent">
                        
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="text-left mt-3 mb-4">Return of Reservation</h3>
                                        <hr></hr>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" class="form" onSubmit={onSubmit} >
                                        <div class="row">
                                                <br></br>
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h3 className="text-left mt-4 mb-3 customersize">Customer Details</h3>
                                                </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="customername">Customer Name</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customername" 
                                                    name="customername" 
                                                    placeholder="Customer Name" t
                                                    tabindex="1" 
                                                    required 
                                                    disabled
                                                    value={customername}
                                                    onChange={(event) => { setcustomername(event.target.value) }}/>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label class="form-label-emp" for="contactnumber">Contact Number</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="contactnumber" 
                                                    name="contactnumber" 
                                                    placeholder="Contact Number" 
                                                    tabindex="2" 
                                                    required
                                                    disabled
                                                    value={contactnumber}
                                                    onChange={(event) => { setcontactnumber(event.target.value) }}/>
                                            </div>
                                            </div>
                                            
                                            <div class="form-group">
                                            <label class="form-label-emp" for="customeraddress">Customer Address</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="customeraddress" 
                                                    name="customeraddress" 
                                                    placeholder="Customer Address" 
                                                    tabindex="3" 
                                                    required 
                                                    disabled
                                                    value={customeraddress}
                                                    onChange={(event) => { setcustomeraddress(event.target.value) }}/>
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
                                                <input 
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="from" 
                                                    name="from" 
                                                    placeholder="" 
                                                    tabindex="5" 
                                                    required
                                                    disabled 
                                                    value={moment(from).format("DD-MMMM-YYYY")}
                                                    //value={from}
                                                    timeFormat={false}
                                                    //isValidDate={disablePastDt}
                                                    onChange={(event) => { setfrom(event) }}/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="to">To</label>
                                                <input 
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="to" 
                                                    name="to" 
                                                    placeholder="" 
                                                    tabindex="6" 
                                                    disabled
                                                    value={moment(to).format("DD-MMMM-YYYY")}
                                                    //value={to}
                                                    timeFormat={false}
                                                    //isValidDate={disableFutureDt}
                                                    //isValidDate={disablePastDt}
                                                    onChange={(event) => { setto(event) }}/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="status">Status</label>
                                                <select
                                                        id="status"
                                                        className="form-control "
                                                        tabindex="4" 
                                                        value={status}
                                                    onChange={(event) => { setstatus(event.target.value) }}
                                                    >
                                                        <option id="select1">Select</option>
                                                        <option id="select2">Pending</option>
                                                        <option id="select3">Complete</option>
                                                    </select>
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-4">
                                                <label class="form-label-emp" for="returnDate">Return Date</label>
                                                <DatePicker
                                                    //type="date" 
                                                    //class="form-control formInput" 
                                                    id="returnDate" 
                                                    name="returnDate" 
                                                    placeholder="" 
                                                    tabindex="7" 
                                                    timeFormat={false}
                                                    //isValidDate={disableFutureDt}
                                                    //isValidDate={disablePastDt}
                                                    />
                                            </div>
                                            </div>

                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="penaltyDay">Penalty Days</label>
                                                <input 
                                                    type="Number" 
                                                    class="form-control formInput" 
                                                    id="penaltyDay" 
                                                    name="penaltyDay" 
                                                    placeholder="Penalty Days" t
                                                    tabindex="8" 
                                                    required 
                                                    />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="penaltyCharge">Penalty Charge</label>
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
                                                <label class="form-label-emp" for="advancedpayment">Advanced Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="advancedpayment" 
                                                    name="advancedpayment" 
                                                    placeholder="Advanced Payment" 
                                                    disabled
                                                    tabindex="10" 
                                                    value={advancedpayment}
                                                    onChange={(event) => { setadvancedpayment(event.target.value) }}/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="totalreservation">Total Reservation Payment</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="totalreservation" 
                                                    name="totalreservation" 
                                                    placeholder="Total Reservation Payment" 
                                                    tabindex="11" 
                                                    value={totalreservation}
                                                    onChange={(event) => { settotalreservation(event.target.value) }}/>
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="reservationPrice">Remaining Reservation Payment</label>
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
                    </div>
                </div>
            </div>
        )
    }

export default Updatereservation;
