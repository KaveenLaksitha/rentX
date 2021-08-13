import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import moment from 'moment';

function RentalList() {

    const [rentals, setRentals] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchRentals();

        } else {
            function getRentals() {
                axios.get("http://localhost:4000/rental/displayRentals").then((res) => { //normally the fetched rental record details are displayed through this
                    setRentals(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getRentals();

        }


    }, [])


    function pendingRecords() {
        function getPendingRentals() {
            axios.get("http://localhost:4000/rental/searchPendingRentalRecords/").then((res) => {
                setRentals(res.data.reverse());
            }).catch((error) => {
                alert(error.message);
            })
        }
        getPendingRentals();
    }


    function searchRentals(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`http://localhost:4000/rental/searchRentalRecs/${search}`).then((res) => {
                setRentals(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {

            axios.get(`http://localhost:4000/rental/searchRentalRecordsX/${search}`).then((res) => {
                setRentals(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
    }


    const deleteRental = async id => {

        const answer = window.confirm("Are you sure you want to permenantly delete?");

        if (answer) {

            await axios.delete(`http://localhost:4000/rental/deleteRental/${id}`);
            alert(`Permenantly deleted the customer ${id}`);

            function getRentals() {
                axios.get("http://localhost:4000/rental/displayRentals").then((res) => {
                    setRentals(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getRentals();
        }
    }

    function refreshPage() {
        window.location.reload();
    }



    return (
        <div className="page-component-body">
            <div className="table-emp">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Rentals</h3>
                    </div>
                    <a href="/addRental" class="float-right">
                        <button class="btn btn-ok white">
                            + Add Rental
                        </button>
                    </a>
                    <p class="float-right ml-4">
                        <button class="btn btn-ok white" id="pending" onClick={pendingRecords}>
                            Pending Rental
                        </button>
                    </p>
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form onSubmit={searchRentals}>
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        value={search} onChange={(event) => { setSearch(event.target.value) }} require />
                                    <button class="btn search_icon" type="submit" id="submit" name="submit"
                                        d>
                                        <i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>



                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Vehicle</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rentals.map((rentals) => {
                            return (

                                <tr >
                                    <Link to={`/rental/getRentalByID/${rentals.id}`}>
                                        <td >{moment(rentals.from).format('YYYY-MMMM-DD')}</td></Link>
                                    <td >{moment(rentals.to).format('YYYY-MMMM-DD')}</td>
                                    <td >{rentals.vehicleType}</td>
                                    <td >{rentals.customerNIC}</td>
                                    <td >{rentals.finalPrice}</td>
                                    <td >{rentals.status}</td>
                                    <td>

                                        <Link class="btn btn-danger btn-sm" to={`/updateRental/${rentals.id}`} role="button"> Update</Link>
                                        <Link class="btn btn-light btn-sm" onClick={() => deleteRental(rentals.id)} role="button"> Remove</Link>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default RentalList;
