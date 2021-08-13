import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import moment from 'moment';

function RentalList() {

    const [rentals, setRentals] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        /*if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            // searchCustomers();



        } else { //normally the fetched customer details are here */

        function getRentals() {
            axios.get("http://localhost:4000/rental/displayRentals").then((res) => {
                setRentals(res.data.reverse());
            }).catch((error) => {
                alert(error.message);
            })
        }
        getRentals();



    }, [])


    /*function searchCustomers(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`http://localhost:8060/customer/searchCustomer/${search}`).then((res) => {
                setCustomers(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {

            axios.get(`http://localhost:8060/customer/searchCustomerByName/${search}`).then((res) => {
                setCustomers(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
    }*/


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
                    <a href="/updateRental" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Pending Rental
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
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Vehicle</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {rentals.map((rentals) => {
                            return (

                                <tr >
                                    <td >{moment(rentals.from).format('YYYY-MMMM-DD')}</td>
                                    <td >{moment(rentals.to).format('YYYY-MMMM-DD')}</td>
                                    <td >{rentals.vehicleType}</td>
                                    <td >{rentals.customerNIC}</td>
                                    <td >{rentals.finalPrice}</td>
                                    <td >{rentals.status}</td>
                                    <td>
                                        <Link class="btn btn-primary ml-2 fa fa-eye" to={`/rental/getRentalByID/${rentals.id}`} role="button"></Link>
                                        <Link class="btn btn-outline-warning ml-2 fa fa-pencil-square-o" to={`/rental/updateRental/${rentals.id}`} role="button"></Link>
                                        <Link class="fa fa-trash btn btn-danger" onClick={() => deleteRental(rentals.id)} role="button"></Link>
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

export default RentalList;
