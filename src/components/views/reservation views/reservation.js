import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import Swal from 'sweetalert2'

function Reservation() {

    {/*const [CarList, setCarList] = useState([]);
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

    }*/}

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

    const [customername, setcustomername] = useState("");
    const [contactnumber, setcontactnumber] = useState("");
    const [nic, setnic] = useState("");
    const [customernic, setcustomernic] = useState("");
    const [customeraddress, setcustomeraddress] = useState("");
    const [packagename, setpackagename] = useState("");
    const [eventtype, seteventtype] = useState("");
    const [from, setfrom] = useState(moment());
    const [to, setto] = useState(moment());
    const [discount, setdiscount] = useState("");
    const [advancedpayment, setadvancedpayment] = useState("");
    const [totalreservation, settotalreservation] = useState("");
    const [status, setstatus] = useState("");

    const [vehicleType, setVehicleType] = useState("");
    const [model, setModel] = useState("");

    const [vehicleType1, setVehicleType1] = useState("");
    const [model1, setModel1] = useState("");

    const [perDayCharge, setPerDayCharge] = useState("");
    const [perDayCharge1, setPerDayCharge1] = useState("");


    const [no1, setno1] = useState("");
    const [no2, setno2] = useState("");

    const [NICErr, setNICErr] = useState("");
    const[MobErr, setMobileErr] = useState("");






    function sendData(e) {
        e.preventDefault();

        const finalpay = document.getElementById('FinalreservationPrice').value = (document.getElementById('total').value - advancedpayment);

        alert("Your ramaining balance is " + `${finalpay}`);

        

        const NICValid  = NICValidation();
        const CntValid  = MobileValidation();

        if(NICValid && CntValid){
            const answer = window.confirm("Are you sure you want to confirm submission?");

        if (answer) {
            const newReservation = { customername, contactnumber, nic, customernic, customeraddress, packagename, eventtype, from, to, discount, advancedpayment, totalreservation, status }

            axios.post("http://localhost:4000/reservations/addReservation", newReservation).then(() => {
                //alert("Reservation added successfully")

                //history.push("/viewReservation");
                Swal.fire({
                        title: 'Reservation Completed!',
                        text: `${"Reservation Added Successfully"}`,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    ).then(() => {
                        window.location.replace('/viewReservation');
                    })

            }).catch((err) => {
                //alert(err.response.data.error)
                Swal.fire({
                        title: 'Oops!',
                        text: `${"User already get Reservation"}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )               

            })
        }
    }
}

    function searchModel() {
        if (document.getElementById('vehicleType').value == 'Car') {
            document.getElementById('model1').value = "Axio";
            document.getElementById('model1').innerHTML = "Axio";
            document.getElementById('model2').value = "Leaf";
            document.getElementById('model2').innerHTML = "Leaf";
            document.getElementById('model3').value = "Alto";
            document.getElementById('model3').innerHTML = "Alto";
        } else if (document.getElementById('vehicleType').value == 'Van') {
            document.getElementById('model1').value = "Caravan";
            document.getElementById('model1').innerHTML = "Caravan";
            document.getElementById('model2').value = "KDH";
            document.getElementById('model2').innerHTML = "KDH";
        } else if (document.getElementById('vehicleType').value == 'Bus') {
            document.getElementById('model1').value = "Coater";
            document.getElementById('model1').innerHTML = "Coater";
            document.getElementById('model2').value = "Rosa";
            document.getElementById('model2').innerHTML = "Rosa";
           
        }
    }

    function searchModel1() {
        if (document.getElementById('vehicleType1').value == 'Car') {
            document.getElementById('model11').value = "Axio";
            document.getElementById('model11').innerHTML = "Axio";
            document.getElementById('model22').value = "Leaf";
            document.getElementById('model22').innerHTML = "Leaf";
            document.getElementById('model33').value = "Alto";
            document.getElementById('model33').innerHTML = "Alto";
        } else if (document.getElementById('vehicleType1').value == 'Van') {
            document.getElementById('model11').value = "Caravan";
            document.getElementById('model11').innerHTML = "Caravan";
            document.getElementById('model22').value = "KDH";
            document.getElementById('model22').innerHTML = "KDH";
         
        } else if (document.getElementById('vehicleType1').value == 'Bus') {
            document.getElementById('model11').value = "Coater";
            document.getElementById('model11').innerHTML = "Coater";
            document.getElementById('model22').value = "Rosa";
            document.getElementById('model22').innerHTML = "Rosa";
        
        }
    }
    function getDateDiff() {
        var admission = moment(from, 'DD-MM-YYYY');
        var discharge = moment(to, 'DD-MM-YYYY');
        const diffDuration = discharge.diff(admission, 'days');
        return diffDuration;
    }



    function showDateRange() {
        document.getElementById('dateRange').value = getDateDiff();
        getRentChargePerDay();
        getRentChargePerDay1()
        document.getElementById('perDayCharge').value = (Number(document.getElementById('noVehiclehide1').value)) * perDayCharge;
       
        document.getElementById('perDayCharge1').value = (Number(document.getElementById('noVehiclehide2').value)) * perDayCharge1;
        var result = Number(document.getElementById('perDayCharge').value) + Number(document.getElementById('perDayCharge1').value);
        if(getDateDiff() == 0){
            var finalresult = document.getElementById('totalreservation').value = result ;
        }else{
            var finalresult = document.getElementById('totalreservation').value = result * getDateDiff();
        }        
        return finalresult;
    }

   {/* function calcprice1(){
        getRentChargePerDay();
        document.getElementById('perDayCharge').value = (Number(document.getElementById('noVehiclehide1').value)) * perDayCharge;
        document.getElementById('perDayCharge').innerHTML = (Number(document.getElementById('noVehiclehide1').value)) * perDayCharge;

    }

    function calcprice2(){
        getRentChargePerDay1()
        document.getElementById('perDayCharge1').value = (Number(document.getElementById('noVehiclehide2').value)) * perDayCharge1;
        document.getElementById('perDayCharge1').innerHTML = (Number(document.getElementById('noVehiclehide2').value)) * perDayCharge1;

    }*/}


    function addtemporaryilyData(e) {
        e.preventDefault();

        getRentChargePerDay();
        getRentChargePerDay1()
        if(packagename == "Package 1" && vehicleType=="Car" && vehicleType1 == "Van"){
            var dis = Number(document.getElementById('discount').value) / 100;
            var final = document.getElementById('totalreservation').value = showDateRange() - (showDateRange() * dis);
            document.getElementById('total').value = final;
            document.getElementById('packagename').value = packagename;

            Swal.fire({
                icon: 'success',
                title: "Package created ! ",
                confirmButtonColor: "#1fc191",
            })
        }else if(packagename == "Package 2" && vehicleType=="Van" && vehicleType1 == "Bus") {
            var dis = Number(document.getElementById('discount').value) / 100;
            var final = document.getElementById('totalreservation').value = showDateRange() - (showDateRange() * dis);
            document.getElementById('total').value = final;
            document.getElementById('packagename').value = packagename;

            Swal.fire({
                icon: 'success',
                title: "Package created ! ",
                confirmButtonColor: "#1fc191",
            })
        }else if(packagename == "Package 3" && vehicleType=="Bus" && vehicleType1 == "Car"){
            var dis = Number(document.getElementById('discount').value) / 100;
            var final = document.getElementById('totalreservation').value = showDateRange() - (showDateRange() * dis);
            document.getElementById('total').value = final;
            document.getElementById('packagename').value = packagename;

            Swal.fire({
                icon: 'success',
                title: "Package created ! ",
                confirmButtonColor: "#1fc191",
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: "Wrong Package created ! ",
                confirmButtonColor: "#1fc191",
            })
        }
        

        //alert("Package Created");
        //Swal.fire({
         //   icon: 'success',
         //   title: "Package created ! ",
          //  confirmButtonColor: "#1fc191",
        //})
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

    function getRentChargePerDay1() {
        function getRent1() {
            axios.get(`http://localhost:4000/vehicle/searchPerDayRentalPrice/${vehicleType1}/${model1}`).then((res) => {
                setPerDayCharge1(res.data)
                console.log(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
        getRent1();
    }

    function showDelivery() {

        if (document.getElementById("entry").click) {
            document.getElementById("hide11").style.display = "block";
            document.getElementById("hide22").style.display = "block";
            document.getElementById("hide33").style.display = "block";
            document.getElementById("hide44").style.display = "block";

        }
    }


    //validation

    //validate function




    const NICValidation = () => {

        const NICErr = {}; //State
        let NICValid = true; //setting flag


        if (customernic.trim().length > 12) {

            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            alert("**Invalid NIC Number");
            NICValid = false;
        } else if (customernic.trim().length < 10) {
            NICErr.InValidNIC = "Invalid NIC Number"; // error msg
            alert("**Invalid NIC Number");
            NICValid = false;
        }


        setNICErr(NICErr);//update error objects
        return NICValid;


}

const MobileValidation =() =>{//validate function

    const MobErr ={}; //State
    let mobileValid = true; //setting flag


    if( contactnumber.trim().length > 10 ){

        MobErr.InValidTeleNo =" *Invalid Phone Number"; // error msg
        alert("**Invalid Telephone Number");
        mobileValid = false;
    }else if(contactnumber.trim().length < 10){
        MobErr.InValidTeleNo =" *Invalid Phone Number"; // error msg
        alert("**Invalid Telephone Number");
        mobileValid = false;
    }
    
    
    setMobileErr(MobErr);//update error objects
    
    return mobileValid;


}

    const [isCntValid, setMobileIsValid] = useState(false);
    const [Mobilemessage, setMobileMessage] = useState('');

    const CntNoRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateCntNo = (event) => {
        const CntNo = event.target.value;
        if (CntNoRegex.test(CntNo)) {
            setMobileIsValid(true);
            setMobileMessage('Your Contact Number looks good!');
        } else {
            setMobileIsValid(false);
            setMobileMessage('Please enter a Contact Number!');
        }
    };

    const [isNICValid, setNICIsValid] = useState(false);
    const [NICmessage, setNICMessage] = useState('');

    const NICRegex1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V]$/;
    const NICRegex2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateNICNo = (event) => {
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






    return (
        <div className="page-component-body ">

            <div class="container input-main-form-emp">
                <br></br>
                <h3> Event Reservation</h3>
                <br></br>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Package</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" >Reservation</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div className="tab-content-emp"></div>
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        <div class="container">
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
                                                placeholder="Package 1"
                                                //tabindex="1"
                                                required
                                                onChange={(event) => {
                                                    setpackagename(event.target.value);
                                                }
                                                } />
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
                                                    //tabindex="5"
                                                    required
                                                    onChange={(event) => {
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
                                                    //tabindex="6"
                                                    timeFormat={false}
                                                    isValidDate={disablePastDt}
                                                    //isValidDate={disableFutureDt}
                                                    onChange={(event) => {
                                                        setto(event);
                                                    }
                                                    }

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
                                                    //tabindex="2"
                                                    disabled
                                                //pattern="[0-9]"
                                                />
                                            </div>
                                        </div>
                                        <br></br>

                                        <div class="row" >
                                            <div class="form-group col-md-4" id="hide1">
                                                <label class="form-label-emp" for="vehicleType">Vehicle Type</label>
                                                <select
                                                    id="vehicleType"
                                                    className="form-control "
                                                    //tabindex="3"
                                                    onChange={e => { setVehicleType(e.target.value); searchModel() }}
                                                    required
                                                >
                                                    <option  >choose</option>
                                                    <option id="type1" value="Car" >Car</option>
                                                    <option id="type2" value="Van">Van</option>
                                                    <option id="type3" value="Bus">Bus</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-4" id="hide2">
                                                <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                <select
                                                    id="vehicleModel"
                                                    className="form-control "
                                                    tabindex="4"
                                                    //required
                                                    onChange={(event) => { setModel(event.target.value);}}
                                                >
                                                    <option  >choose</option>
                                                    <option id="model1" ></option>
                                                    <option id="model2"></option>
                                                    <option id="model3"></option>


                                                </select>
                                            </div>
                                            <div class="form-group col-md-2" id="hide3">
                                                <label class="form-label-emp" for="noVehiclehide1">No of Vehicle</label>
                                                <input
                                                    type="number"
                                                    class="form-control formInput"
                                                    id="noVehiclehide1"
                                                    name="noVehiclehide1"
                                                    placeholder="Count"
                                                    min="1"
                                                    //tabindex="5"
                                                    pattern="[0-9]"
                                                    required
                                                    onChange={(event) => { setno1(event.target.value);  }}
                                                />
                                            </div>
                                            <div class="form-group col-md-2" id="hide4" >
                                                <label class="form-label-emp" for="perDayCharge">Price</label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="perDayCharge"
                                                    name="perDayCharge"
                                                    placeholder="0.00"
                                                    //tabindex="5"
                                                    required
                                                    disabled
                                                //pattern="[0-9]"
                                                />
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-4" style={{ display: "none" }} id="hide11" >
                                                <label class="form-label-emp" for="vehicleType1">Vehicle Type</label>
                                                <select
                                                    id="vehicleType1"
                                                    className="form-control "
                                                    //tabindex="3"
                                                    onChange={e => { setVehicleType1(e.target.value); searchModel1() }}
                                                    required
                                                >
                                                    <option  >choose</option>
                                                    <option id="type11" value="Car" >Car</option>
                                                    <option id="type22" value="Van">Van</option>
                                                    <option id="type33" value="Bus">Bus</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-4" style={{ display: "none" }} id="hide22">
                                                <label class="form-label-emp" for="vehicleModel">Vehicle Model</label>
                                                <select
                                                    id="vehicleModelnew"
                                                    className="form-control "
                                                    //tabindex="4"
                                                    onChange={(event) => { setModel1(event.target.value); }}
                                                >
                                                    <option  >choose</option>
                                                    <option id="model11"></option>
                                                    <option id="model22"></option>
                                                    <option id="model33"></option>

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
                                                    //tabindex="5"
                                                    pattern="[0-9]"
                                                    required
                                                    onChange={(event) => { setno2(event.target.value);  }}
                                                />
                                            </div>
                                            <div class="form-group col-md-2" style={{ display: "none" }} id="hide44" >
                                                <label class="form-label-emp" for="perDayCharge1">Price</label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="perDayCharge1"
                                                    name="perDayCharge1"
                                                    placeholder="0.00"
                                                    min="1"
                                                    //tabindex="5"
                                                    disabled
                                                //pattern="[0-9]"
                                                />
                                            </div>

                                        </div>
                                        <div class="row" >
                                            <div class="form-group col-md-2">
                                                <input type="button" class="btn btn-info" id="entry" value=" Add Vehicles" onClick={showDelivery} />
                                            </div>
                                            <div class="form-group col-md-2">
                                                <input type="button" class="btn btn-info" id="entry" value=" Date Range And Total " onClick={showDateRange} />
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
                                                    //tabindex="6"
                                                    //pattern="[0-9]"
                                                    //required 
                                                    onChange={(event) => {
                                                        setdiscount(event.target.value);
                                                    }
                                                    } />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="totalreservation">Total Price</label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="totalreservation"
                                                    name="totalreservation"
                                                    placeholder="0.00"
                                                    //tabindex="7"
                                                    //required 

                                                    onClickCapture={(event) => {
                                                        settotalreservation(event.target.value);
                                                    }
                                                    }
                                                />
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
                        <div className=" package">
                                        <div class="tab-content-emp"></div>
                                        <form>
                                        <br></br>
                                        <center>
                                            <h2>Packages</h2></center>
                                            <div class="form-row">
                                                <div class="col-6 form-row-change">
                                                    <label class="form-label-h" for="rentalStatus">Package 1:  </label>
                                                </div>
                                                <div class="col-4 form-row-change1">
                                                    <input type="text" class="form-control-plaintext" id="rentalStatus" value="Car AND Van" readOnly />
                                                </div>
                                            </div>
                                        <div class="form-row ">
                                            <div class="col-6 form-row-change">
                                                <label class="form-label-h" for="customer">Package 2: </label>
                                            </div>
                                            <div class="col-4 form-row-change1">
                                                <input type="text" class="form-control-plaintext" id="customer" value="Van AND Bus" readOnly />
                                            </div>
                                        </div>
                                        <div class="form-row ">
                                            <div class="col-6 form-row-change">
                                                <label class="form-label-h" for="vehicle">Package 3: </label>
                                            </div>
                                            <div class="col-4 form-row-change1">
                                                <input type="text" class="form-control-plaintext" id="vehicle" value="Bus AND Car" readOnly />
                                            </div>
                                        </div>             
                                        </form>
                                    </div>

                    </div>

                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="container">
                            <br></br>
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
                                                    onChange={(event) => {
                                                        setcustomername(event.target.value);
                                                    }
                                                    } />
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
                                                    onChange={(event) => {
                                                        setcustomernic(event.target.value);
                                                        validateNICNo(event);
                                                    }
                                                    } />
                                                    <div className={`message ${isNICValid ? 'success' : 'error'}`}>
                                                        {NICmessage}
                                                    </div>

                                                    {Object.keys(NICErr).map((key) => {
                                                        // return <div style={{ color: "red" }}>{NICErr[key]}</div>
                                                    })}


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
                                                    placeholder="Contact Number(0703814914)" 
                                                    //abindex="2"
                                                    required
                                                    //pattern="[0-9]{10}"
                                                    onChange={(event) => {
                                                        setcontactnumber(event.target.value);
                                                        validateCntNo(event);
                                                    }
                                                    } />
                                                    <div className={`message ${isCntValid ? 'success' : 'error'}`}>
                                                        {Mobilemessage}
                                                    </div>

                                                    {Object.keys(MobErr).map((key)=>{
                                                        // return<div className ={message}>{TeleErr[key]}</div>
                                                    })}
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="nic">NIC</label>
                                                <input
                                                    type="file"
                                                    class="form-control formInput"
                                                    id="nic"
                                                    name="nic"
                                                    placeholder="NIC (965169472v)"
                                                    //tabindex="3"
                                                    //required
                                                    onChange={(event) => {
                                                        setnic(event.target.value);
                                                        
                                                    }
                                                    } />



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
                                                //tabindex="4"
                                                //required
                                                onChange={(event) => {
                                                    setcustomeraddress(event.target.value);
                                                }
                                                } />
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
                                                placeholder=""
                                                //tabindex="7"
                                                required
                                                disabled
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
                                                    //tabindex="7"
                                                    //required 
                                                    onChange={(event) => {
                                                        seteventtype(event.target.value);
                                                    }
                                                    } />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="status">Status</label>
                                                <select
                                                    id="status"
                                                    className="form-control "
                                                    onChange={(event) => {
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
                                                    //tabindex="9"
                                                    onChange={(event) => {
                                                        setadvancedpayment(event.target.value);
                                                    }
                                                    }
                                                    onFocus={getRentChargePerDay} />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="total">Total Reservation Price</label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="total"
                                                    name="total"
                                                    placeholder="Total Reservation Price (25000.00)"
                                                    //tabindex="10"
                                                    disabled

                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="form-label" for="FinalreservationPrice">Final Remaining Price</label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="FinalreservationPrice"
                                                    name="FinalreservationPrice"
                                                    placeholder="Final Reservation Price (15000.00)"
                                                    //tabindex="11"
                                                    disabled
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
                </div>
            </div>
            <br></br>
        </div>

    )
}

export default Reservation
