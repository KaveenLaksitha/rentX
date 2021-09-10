import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Dashboard() {

    const [newRentals, setNewRentals] = useState("");
    const [returnedRentals, setReturnedRentals] = useState("");
    const [rentalList, setRentalList] = useState([]);

    
    const [newReservation, setNewReservation] = useState("");
    const [returnedReservation, setReturnedReservation] = useState("");
    const [reservationList, setReservationList] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:4000/rental/VehiclesRentedToday").then((res) => { //fetching the count of rentals placed on current date
            setNewRentals(res.data);
        }).catch((error) => {
            alert(error)
        })

        axios.get("http://localhost:4000/deletedRentals/VehiclesReturnedToday").then((res) => { //fetching the count of rentals returned on current date
            setReturnedRentals(res.data);
        }).catch((error) => {
            alert(error)
        })

        function readRentals() {
            axios.get("http://localhost:4000/rental/getLatestRentalsOnly").then((res) => { //fetching the latestly placed three rentals
                setRentalList(res.data);
            }).catch((error) => {
                alert(error)
            })
        }
        readRentals();

        axios.get("http://localhost:4000/reservations/VehiclesReservationToday").then((res) => { //fetching the count of rentals placed on current date
        setNewReservation(res.data);
        }).catch((error) => {
            alert(error)
        })

        axios.get("http://localhost:4000/deletedReservations/VehiclesReservationToday").then((res) => { //fetching the count of rentals returned on current date
        setReturnedReservation(res.data);
        }).catch((error) => {
            alert(error)
        })

        function readReservation() {
            axios.get("http://localhost:4000/reservations/getLatestReservationOnly").then((res) => { //fetching the latestly placed three rentals
            setReservationList(res.data);
            }).catch((error) => {
                alert(error)
            })
        }
        readReservation();

    }, [])

    return (
        <div className="page-component-body">
            <div className=" container comp-one">
                <h2>Today</h2>

                <div class="newRentals">
                    <center><p>{newRentals}</p></center>
                    <p>new rentals today</p>
                </div>
                <div class="newReservations">
                    <center><p>{newReservation}</p></center>
                    <p>new reservations today</p>
                </div>
                <div class="returnsToday">
                    <center><p>{returnedRentals, returnedReservation}</p></center>
                    <p>returns today</p>
                </div>
                <div class="availableVehicles">
                    <center><p>{newRentals}</p></center>
                    <p>available vehicles</p>
                </div>
            </div>

            <div class="container mt-3">

                <div class="row">
                    <div class="col-sm comp-one mx-3 my-3">
                        <div class="viewAll">
                            <Link to="/rentalList"><button className="btn btn-close" > ViewAll</button></Link>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Vehicle</th>
                                    <th>Total (Rs.)</th>

                                </tr>
                            </thead>
                            <tbody>
                                {rentalList.map((rental) => {
                                    return (
                                        <tr >
                                            <td> {rental.from}</td>
                                            <td >{rental.to}</td>
                                            <td >{rental.vehicleType}</td>
                                            <td >{rental.finalPrice.toFixed(2)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                    <div class="col-sm comp-one mx-3 my-3">
                         <div class="viewAll">
                            <Link to="/viewReservation"><button className="btn btn-close" > ViewAll</button></Link>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>To</th>
                                    <th>Type Name</th>
                                    <th>Package</th>
                                    <th>Total (Rs.)</th>

                                </tr>
                            </thead>
                            <tbody>
                                {reservationList.map((reservations) => {
                                    return (
                                        <tr >
                                            <td> {reservations.to}</td>
                                            <td >{reservations.eventtype}</td>
                                            <td >{reservations.packagename}</td>
                                            <td >{reservations.totalreservation.toFixed(2)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="links">
                <h3>Quick Links</h3>
                <a className="qlink" href="/rentalList">Car availability</a><span>|</span>
                <a className="qlink" href="/addVehicle">Add new vehicle</a><span>|</span>
                <a className="qlink" href="/addEmployee">Add new employee</a>
            </div>

        </div>
    )
}

export default Dashboard
