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

    const [newVehicle, setNewVehicle] = useState("");

    useEffect(() => {


        axios.get("http://localhost:4000/rental/VehiclesRentedToday").then((res) => { //fetching the count of rentals placed on current date
            setNewRentals(("0" + res.data).slice(-2));
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
            setNewReservation(("0" + res.data).slice(-2));
        }).catch((error) => {
            alert(error)
        })

        axios.get("http://localhost:4000/deletedReservations/VehiclesReservationToday").then((res) => { //fetching the count of rentals returned on current date
            setReturnedReservation(("0" + res.data).slice(-1));
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

        axios.get("http://localhost:4000/vehicle/VehiclesAvailable").then((res) => { //fetching the count of rentals placed on current date
            setNewVehicle(("0" + res.data).slice(-2));
        }).catch((error) => {
            alert(error)
        })

    }, [])

    return (
        <div className="page-component-body">
            <div className=" container comp-one">
                <div className="row mb-3 mt-3">
                    <div class="col ml-3">
                        <h3 className="float-left">Today</h3>
                    </div>
                </div>
                <hr className="dashboard-hr"></hr>
                <div className="row">
                    <div class="col">
                        <center><p>{newRentals}</p></center>
                        <center><p>new rentals today</p></center>
                    </div>
                    <div class="col">
                        <center><p>{newReservation}</p></center>
                        <center><p>new reservations today</p></center>
                    </div>
                    <div class="col">
                        <center><p>{returnedRentals + returnedReservation}</p></center>
                        <center><p>returns today</p></center>
                    </div>
                    <div class="col">
                        <center><p>{newVehicle}</p></center>
                        <center><p>available vehicles</p></center>
                    </div>
                </div>
            </div>

            <div class="container mt-3">

                <div class="row">
                    <div className="col comp-one mx-3 my-3">
                        <div class="row table-head  mt-3">
                            <div class="col">
                                <h3 className="float-left">Latest Rentals</h3>
                            </div>
                            <Link to="/rentalList" class="float-right">
                                <button className="btn btn-close" > View all</button>
                            </Link>
                        </div>
                        <table class="table table-hover">
                            <thead className="thead-dark">
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
                        <div class="row table-head  mt-3">
                            <div class="col">
                                <h3 className="float-left">Latest Reservations</h3>
                            </div>
                            <Link to="/viewReservation" class="float-right"><button className="btn btn-close" > ViewAll</button></Link>
                        </div>
                        <table class="table table-hover">
                            <thead className="thead-dark">
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

            <div className="container pl-5 mt-3">
                <h3 className="ml-2">Quick Links</h3>
                <a className="ml-2" href="/rentalList">Car availability</a><span className="qlink">|</span>
                <a className="ml-2" href="/addVehicle">Add new vehicle</a><span className="qlink">|</span>
                <a className="ml-2" href="/addEmployee">Add new employee</a>
            </div>

        </div >
    )
}

export default Dashboard
