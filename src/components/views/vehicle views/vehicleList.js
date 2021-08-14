import axios from 'axios'
import React ,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function VehicleList() {

    const [vehicles, setVehicles] = useState([]);
    
   
    useEffect(() => {

        function getVehicles() {
            axios.get("http://localhost:4000/vehicle/view").then((res)=>{


                setVehicles(res.data.reverse());
                console.log("Data recieved");
            }).catch((error) => {
                    alert(error.message);
            })
            
        }

        getVehicles();

    }, []);





    return (

        <div className="page-component-body">
        <div className="table-emp">
            <div class="row table-head">
                <div class="col">
                    <h3 className="float-left">List of vehicle</h3>
                </div>
                <a href="/addVehicle" class="float-right">
                    <button class="btn btn-ok white">
                        Add Vehicle
                    </button>
                </a>
                <a href="#" class="float-right ml-4">
                    <button class="btn btn-ok white">
                        Deleted Vehicle
                    </button>
                </a>
            </div>
            <div class="row table-head-search">
                <div className="col-md-8"></div>
                <div className="col">
                    <div class="input-group input-group-search">
                        <div class="searchbar">
                            <input class="search_input" type="text" name="" placeholder="Search..." />
                            <button class="btn search_icon" type="button"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>



            <table class="table table-striped table-primary">
            <thead class="thead-dark">
                <tr>
                    <th>Vehicle Reg No</th>
                    <th>Brand</th>
                    <th>Modal</th>
                    <th>Type</th>
                    <th>Rate</th>
                    <th>Action</th>
                </tr>
                {/* {this.generateTableRows(EmployeeList)} */}
                </thead>
                <tbody>
                    {vehicles.map((vehicles)=>{

                        return(
                            <tr>
                               {/* <Link to = {} /> */}
                               <td>{vehicles.VehicleRegNo}</td>
                               <td>{vehicles.VehicleBrand}</td>
                               <td>{vehicles.VehicleModel}</td>
                               <td>{vehicles.VehicleType}</td>
                               <td>{vehicles.RatePDay}</td>
                               <td>

                                        <Link class="btn btn-danger btn-sm" 
                                        
                                                // to={`/updateRental/${rentals.id}`}
                                        
                                        role="button"> Update</Link>
                                        <Link class="btn btn-light btn-sm"
                                        
                                                // onClick={() => deleteRental(rentals.id)} 
                                                
                                                
                                                role="button"> Remove</Link>

                               </td>


                            </tr>
                        );


                    })}
                  

                </tbody>
            </table>
        </div>
    </div>
    )
}

export default VehicleList;
