import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import Pdf from "react-to-pdf";
const ref = React.createRef();



 function VehicleReport() {


    const[dateFrom, setDateFrom]=useState("");
    const[dateTo, setDateTo]=useState("");
    const[Type,setType] =useState("");
    const[Brand, setBrand] = useState("");
    const[years,setYears] = useState("");
    const[vehicleLists, setvehicleList] = useState([]);


    function sendData(e){

        e.preventDefault();
        changeBoxes();
        

        axios.get(`http://localhost:4000/vehicle/reportV/${dateFrom}/${dateTo}/${Type}/${Brand}/${years}`).then((res)=>{
            // const message = "No record found!"
            console.log("data in vehicle list page", res.data);
            setvehicleList(res.data);

            if(res.data == 0){
                alert("no data found!!");
            }


        }).catch((err)=>{
            alert(err)
        })
    }

    function changeBoxes() {
        document.getElementById('myTabContent').style.display = "none";
        document.getElementById('myTabContent2').style.display = "block";

    }



    return (
            <div className="page-component-body">
                <div class="container input-main-form-emp">
                    <div class="tab-content-emp" id="myTabContent">
                        
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                       <form>
                                        <center>
                                        <h3 className=" mt-3 mb-4">Generate Report on Vehicle Records </h3>
                                        </center>
                                        <hr></hr>
                                        </form>
                                    </div>
                                </div>
                                <br></br>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" onSubmit={sendData} >
                                    <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="from">From</label>
                                                <DatePicker  
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="dateFrom" 
                                                    name="dateFrom" 
                                                    placeholder="" 
                                                    tabindex="5" 
                                                    required 
                                                    onChange={(e)=>{
                                                        setDateFrom(e.target.value);
                                                    }}
                                                   
                                                    />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="to">To</label>
                                                <DatePicker 
                                                    required 
                                                    //type="date" 
                                                    class="form-control formInput" 
                                                    id="dateTo" 
                                                    name="dateTo" 
                                                    placeholder="" 
                                                    tabindex="6" 
                                                    timeFormat={false}
                                                    onChange={(e=>{
                                                        setDateTo(e.target.value);
                                                    })}
                                                    
                                                    
                                                    />
                                            </div> 
                                            </div>

                                            <br></br>

                                            <div class="form-group">
                                                <label class="form-label-emp" for="customeraddress">Vehicle Type</label>
                                                <select
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="Type" 
                                                    name="customeraddress" 
                                                    placeholder="Customer Address" 
                                                    tabindex="4" 
                                                    //required
                                                    onChange={(e)=>{
                                                        setType(e.target.value);
                                                    }
                                                    }
                                                    >

                                                    <option id="choose1">Choose</option>
                                                    <option value="car">Car</option>
                                                    <option value="van">Van</option>
                                                    <option value="bus">Bus</option>
                                                </select>
                                                    
                                            </div>

                                            <br></br>

                                            <div class="form-group">
                                                <label class="form-label-emp" for="customeraddress">Brand</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control formInput" 
                                                    id="Brand" 
                                                    name="Brand" 
                                                    placeholder="" 
                                                    tabindex="4" 
                                                    //required

                                                    onChange={(e)=>{
                                                        setBrand(e.target.value);

                                                    }}
                                                    />
                                            </div>
                                        <br></br>
                                        <div className="row">
                                        <div className="form-group col-md-4">
                                        <label class="form-label-emp" for="customeraddress">Years of Rental</label>
                                                <input 
                                                    type="number" 
                                                    class="form-control formInput" 
                                                    id="years" 
                                                    name="years" 
                                                    placeholder="" 
                                                    tabindex="4" 
                                                    //required
                                                    onChange={(e)=>{
                                                        setYears(e.target.value);
                                                    }}
                                                    />

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
                    <Pdf targetRef={ref} filename="VehicleReport.pdf">
                        {({ toPdf }) => <button class="btn btn-download white" onClick={toPdf}><i class="fa fa-download" aria-hidden="true"></i></button>}
                    </Pdf>
                    <div ref={ref} className="pl-4">
                        <div className="report">
                            <img src="https://i.ibb.co/Srr7ynJ/vehicle-Report.jpg" />

                            <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Type</th>
                                        <th>Brand</th>
                                        <th>Years of rental</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicleLists.map((vehicle) => {
                                        return (

                                            <tr >

                                                <td > {vehicle.dateFrom}</td>
                                                <td >{vehicle.dateTo}</td>
                                                <td >{vehicle.Type}</td>
                                                <td >{vehicle.Brand}</td>
                                                <td >{vehicle.years}</td>
                                                
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <h6 className="pb-5">Report generated on : <span id="dateDisplay"></span></h6>
                    </div>
                </div>

                    
                </div>
            </div>
        )
    }

export default VehicleReport;
