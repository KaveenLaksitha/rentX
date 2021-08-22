import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";







function UpdateVehicleModal(vehicle) {

    console.log("update modal dataaaaaa", vehicle);

    useEffect(() => {
        try {
            setVehicleID(vehicle.data.VehicleID);
            setVehicleRegNo(vehicle.data.VehicleRegNo);
            setVehicleModel(vehicle.data.VehicleModel);
            setVehicleType(vehicle.data.VehicleType);
            setVehicleBrand(vehicle.data.VehicleBrand);
            setInsType(vehicle.data.InsType);
            setInsComName(vehicle.data.InsComName);
            setTransmission(vehicle.data.Transmission);
            setAirC(vehicle.data.AirC);
            setNoOfSeats(vehicle.data.NoOfSeats);
            setRatePDay(vehicle.data.RatePDay);
            setYearsRent(vehicle.data.YearsRent);
            setvehPic(vehicle.data.vehPic);
            setvehDoc(vehicle.data.vehDoc);


        } catch {
            window.alert("something went wrong");
        }
    }, [vehicle.data]);

    const [VehicleID, setVehicleID] = useState("");
    const [VehicleRegNo, setVehicleRegNo] = useState("");
    const [VehicleModel, setVehicleModel] = useState("");
    const [VehicleType, setVehicleType] = useState("");
    const [VehicleBrand, setVehicleBrand] = useState("");
    const [InsType, setInsType] = useState("");
    const[InsComName, setInsComName] = useState("");
    const[Transmission, setTransmission] = useState("");
    const[AirC, setAirC] = useState("");
    const[NoOfSeats, setNoOfSeats] = useState("");
    const[RatePDay, setRatePDay] = useState("");
    const[YearsRent, setYearsRent] = useState("");
    const[vehPic, setvehPic] = useState("");
    const[vehDoc, setvehDoc] = useState("");


    const uptVehicle = {
            
        
        VehicleRegNo,
        VehicleModel,
        VehicleType,
        VehicleBrand,
        InsType,
        InsComName,
        Transmission,
        AirC,
        NoOfSeats,
        RatePDay,
        YearsRent,
        vehPic,
        vehDoc


    }
    
    console.log("came dataaaaa", uptVehicle)


    function sendData(e) {

        e.preventDefault();

        // const isValid = formValidation();
        // const teleValid = TeleValidation();
        // const NICValid  = NICValidation();


        // if(isValid && teleValid && NICValid){

            

        
        const newVehicle = {
            
            
            VehicleRegNo,
            VehicleModel,
            VehicleType,
            VehicleBrand,
            InsType,
            InsComName,
            Transmission,
            AirC,
            NoOfSeats,
            RatePDay,
            YearsRent,
            vehPic,
            vehDoc


        }

        // const updateVehicle (VehicleID, newVehicle).then((response) => {
        //     // const message = response.ok
        //     //     ? "Employee insertion successful"
        //     //     : response.err;
        //     // alert(message);
        //     //window.location.replace("/empList");
        // });

        // axios.post("http://localhost:4000/vehicle/addVehicle", newVehicle)

        // .then(() => {
        //     alert("Vehicle added Successfully !!")
        //     window.location.replace("/vehicleList");

        // }).catch((err) => {
        //     alert(err)
        // })

    // }
}









    return (
        <div>
             <Modal.Header closeButton>
                <Modal.Title>Update Vehicle: {vehicle.data.VehicleRegNo}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4">

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
                                                value={VehicleRegNo}

                                            onChange={(e) => {
                                                setVehicleRegNo(e)
                                            }}
                                            />
                                                </div>
                                                </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="name">Vehicle Brand</label>
                                            <input type="text" class="form-control formInput" id="VehicleBrand" name="VehicleBrand" placeholder="eg : Toyota , Nissan" tabindex="1" required 

                                                value={VehicleBrand}
                                            
                                                onChange={(e) => {
                                                setVehicleBrand(e.target.value); // assign value
                                                }}
                                            
                                            
                                            />
                                            
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="email">Vehicle Model</label>
                                            <input type="email" class="form-control formInput" id="vehModal" name="vehModal"  placeholder=" eg : KDH, Axio " tabindex="2" required 
                                            
                                                value={VehicleModel}
                                                onChange={(e) => {
                                                setVehicleModel(e.target.value); // assign value
                                                 }}
                                            
                                            />
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="subject">Vehicle Type</label>
                                            <select
                                                    value={VehicleType}
                                                    id="vehType"
                                                    className="form-control "
                                                    onChange={(e) => {
                                                        setVehicleType(e.target.value); // assign value
                                                         }}
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
                                                    value={InsType}
                                                    onChange={(e) => {
                                                        setInsType(e.target.value); // assign value
                                                         }}
                                                >
                                                    <option id="InsF">Full Insurance</option>
                                                    <option id="InsT">Third-party Insurance</option>
                                                    
                                                </select>
                                
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Insurance Company Name </label>
                                                <input required type="text" class="form-control formInput" id="InsCom" name="InsCom" placeholder="Insurance Company Name" tabindex="2" required
                                                    value={InsComName}
                                                onChange={(e) => {
                                                    setInsComName(e.target.value);
                                                }}

                                                />
                                            </div>
                                    </div>



                                    <div className="row">
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="name">Transmission</label>
                                            <select
                                                    value={Transmission}
                                                    id="Trans"
                                                    className="form-control "
                                                    onChange={(e) => {

                                                        setTransmission(e.target.value);
                                                    }}
                                                >
                                                    <option id="Auto">Auto </option>
                                                    <option id="Mannual">Mannual</option>
                
                                                </select>
                                            
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="Air COndition">Air Condition</label>
                                            

                                            <select
                                                    value={AirC}
                                                    id="AirC"
                                                    className="form-control "
                                                    onChange={(e) => {
                                                        setAirC(e.target.value);
                                                    }}
                                                >
                                                    <option id="FAC">Full - AC </option>
                                                    <option id="NAC">Non - AC </option>
                                                </select>
                                        </div>
                                        <div class="form-group col-sm">
                                            <label class="form-label-emp" for="subject">Number of seats </label>
                                            <input type="text" class="form-control formInput" id="seat" name="seat"  placeholder=" Number of seats" tabindex="2" required 
                                            value={NoOfSeats}
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
                                                    <input required type="text" class="form-control formInput" id="regNo" name="Owner NIC" placeholder="0.00" tabindex="2" required 
                                                            value={RatePDay}
                                                            onChange={(e) => {
                                                                setRatePDay(e.target.value);
                                                            }}
                                                    />
                                                </div>
                                                </div>
                                                
                                                
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="form-label-emp" for="subject">Years of Rental </label>
                                                <input  required type="text" class="form-control formInput" id="NoYears" name="NoYears" placeholder="Years of Rental" tabindex="3"
                                                value={YearsRent}
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
                                            value={vehPic}
                                            onChange={(e) => {
                                                setvehPic(e.target.value);
                                            }}
                                            
                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlFile1">Copy of Agreement</label>
                                            <input type="file" class="form-control-file pt-3" id="Agreement" 
                                            value={vehDoc}
                                            onChange={(e) => {
                                                setvehDoc(e.target.value);
                                            }}
                                            
                                            
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-4">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok">
                                                Update
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset" onClick={vehicle.onHide}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>






            </Modal.Body>


            
        </div>
    )
}

export default UpdateVehicleModal
