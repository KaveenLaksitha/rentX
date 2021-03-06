import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import Pdf from "react-to-pdf";
import Swal from 'sweetalert2';
import Header from "../../Header";
const ref = React.createRef();


function RentalReport() {

    const [from, setFrom] = useState(moment().format('YYYY-MMMM-DD'));
    const [to, setTo] = useState(moment().format('YYYY-MMMM-DD'));
    const [status, setStatus] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [rentalList, setRentalList] = useState([]);

    useEffect(() => {
        document.getElementById("dateDisplay").innerHTML = date;

    }, []);

    function sendData(e) {
        e.preventDefault();
        changeBoxes();

        var fromDate = moment(from).format('YYYY-MMMM-DD');
        var ToDate = moment(to).format('YYYY-MMMM-DD');

        if (status == "Pending") {

            if ((customerName == "") && (vehicleType == "")) {
                const cust = "null"
                const vehi = "null"
                axios.get(`https://rent-x-api.herokuapp.com/rental/generateReport/${fromDate}/${ToDate}/${vehi}/${cust}`).then((res) => { //fetching the count of rentals placed on current date
                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })
            }
            else if (customerName == "") {
                const cus = "null"
                axios.get(`https://rent-x-api.herokuapp.com/rental/generateReport/${fromDate}/${ToDate}/${vehicleType}/${cus}`).then((res) => { //fetching the count of rentals placed on current date
                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })
            } else if (vehicleType == "") {
                const veh = "null"
                axios.get(`https://rent-x-api.herokuapp.com/rental/generateReport/${fromDate}/${ToDate}/${veh}/${customerName}`).then((res) => { //fetching the count of rentals placed on current date
                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })

            } else {

                axios.get(`https://rent-x-api.herokuapp.com/rental/generateReport/${fromDate}/${ToDate}/${vehicleType}/${customerName}`).then((res) => { //fetching the count of rentals placed on current date
                    console.log(res.data);
                    setRentalList(res.data);

                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })
            }
        }
        else if (status == "Completed") {
            if ((customerName == "") && (vehicleType == "")) {
                const cust = "null"
                const vehi = "null"

                axios.get(`https://rent-x-api.herokuapp.com/deletedRentals/generateReport/${fromDate}/${ToDate}/${vehi}/${cust}`).then((res) => { //fetching the count of rentals placed on current date

                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })
            }
            else if (customerName == "") {
                const cus = "null"

                axios.get(`https://rent-x-api.herokuapp.com/deletedRentals/generateReport/${fromDate}/${ToDate}/${vehicleType}/${cus}`).then((res) => { //fetching the count of rentals placed on current date

                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })
            } else if (vehicleType == "") {
                const veh = "null"

                axios.get(`https://rent-x-api.herokuapp.com/deletedRentals/generateReport/${fromDate}/${ToDate}/${veh}/${customerName}`).then((res) => { //fetching the count of rentals placed on current date

                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })

            } else {


                axios.get(`https://rent-x-api.herokuapp.com/deletedRentals/generateReport/${fromDate}/${ToDate}/${vehicleType}/${customerName}`).then((res) => { //fetching the count of rentals placed on current date

                    console.log(res.data);
                    setRentalList(res.data);
                }).catch((error) => {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${error}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                    //alert(error)
                })
            }

        }

    }

    function changeBoxes() {
        document.getElementById('myTabContent').style.display = "none";
        document.getElementById('myTabContent2').style.display = "block";

    }

    const date = new Date();



    return (
        <div className="page-component-body">
            <Header></Header>
            <div class="container input-main-form-emp">
                <div class="tab-content-emp" id="myTabContent">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <form >
                                    <center>
                                        <h3 className=" mt-3 mb-4">Generate Report on Rental Records </h3>
                                    </center>
                                    <hr></hr>
                                </form>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="contact-form" class="form" onSubmit={sendData}>
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
                                                timeFormat={false}
                                                onChange={(event) => { setFrom(event); }}
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
                                                onChange={(event) => { setTo(event); }}

                                            />
                                        </div>
                                    </div>

                                    <br></br>

                                    <div class="form-group">
                                        <label class="form-label-emp" for="Vehicletype">Type</label>
                                        <select
                                            type="text"
                                            class="form-control formInput"
                                            id="Vehicletype"
                                            name="Vehicletype"
                                            placeholder="Vehicle Type "
                                            tabindex="4"
                                            onChange={(event) => { setVehicleType(event.target.value); }}
                                        //required
                                        >
                                            <option  >choose</option>
                                            <option value="Car" >Car</option>
                                            <option value="Van">Van</option>
                                            <option value="Bus">Bus</option>
                                        </select>
                                    </div>

                                    <br></br>

                                    <div class="form-group">
                                        <label class="form-label-emp" for="customername">Customer Name</label>
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="customername"
                                            name="customername"
                                            placeholder=""
                                            tabindex="4"
                                            onChange={(event) => { setCustomerName(event.target.value); }}
                                        //required
                                        />
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="form-label-emp " for="status">Status: </label>
                                            <br></br>
                                            <div className="form-check form-check-inline ml-2 mr-5">
                                                <label className="form-check-label" for="inlineCheckbox1">
                                                    <input className="form-check-input" type="radio" id="status1" name="status" value="Pending"
                                                        onChange={(event) => { setStatus(event.target.value); }}
                                                    />Pending</label>
                                            </div>
                                            <div className="form-check form-check-inline ml-5">
                                                <label className="form-check-label" for="inlineCheckbox2">
                                                    <input className="form-check-input" type="radio" id="status2" name="status" value="Completed"
                                                        onChange={(event) => { setStatus(event.target.value); }}
                                                    />Completed</label>
                                            </div>

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
                <div id="myTabContent2" style={{ display: "none" }}>
                    <Pdf targetRef={ref} filename="RentalReport.pdf">
                        {({ toPdf }) => <button class="btn btn-download white" onClick={toPdf}><i class="fa fa-download" aria-hidden="true"></i></button>}
                    </Pdf>
                    <div ref={ref} className="pl-4">
                        <div className="report">
                            <img src="https://i.ibb.co/ymzyhHx/rental-Report.jpg" />

                            <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Vehicle</th>
                                        {/* <th>NIC</th> */}
                                        <th>Customer Name</th>
                                        <th>Total (Rs.)</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rentalList.map((rental) => {
                                        return (

                                            <tr >

                                                <td > {rental.from}</td>
                                                <td >{rental.to}</td>
                                                <td >{rental.vehicleType}</td>
                                                {/* <td >{rental.customerNIC}</td> */}
                                                <td >{rental.customerName}</td>
                                                <td >{rental.finalPrice.toFixed(2)}</td>
                                                <td >{rental.status}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <h6 className="pb-5">Report generated on : <span id="dateDisplay"></span></h6>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default RentalReport;
