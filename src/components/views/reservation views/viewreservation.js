import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';


function Viewreservation() {

    const [reservations, setReservations] = useState([]);

   
        axios.get("http://localhost:4000/reservations/displayReservation").then((res) => {
            setReservations(res.data.reverse());
        }).catch((error) => {
          alert(error.message);
        })
  

   

     /*useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchOrders();

        } else {//normally the fetched order details are here   

            function getOrders() {
                axios.get("http://localhost:8060/order/displayOrders").then((res) => {
                    setOrders(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getOrders();
        }
    }, [])*/

    /*const deleteOrder = async orderId => {



        const answer = window.confirm("Are you sure you want to permenantly delete?");

        if (answer) {

            await axios.delete(`http://localhost:8060/orderItem/deleteOrderItem/${orderId}`)
            alert("OrderItems successfully deleted");

            await axios.delete(`http://localhost:8060/order/deleteOrder/${orderId}`)
            alert("Order successfully deleted");

            function getOrders() {
                axios.get("http://localhost:8060/order/displayOrders").then((res) => {
                    setOrders(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })

            }
            getOrders();
        }
    }*/


    /*function searchOrders(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`http://localhost:8060/order/searchOrders/${search}`).then((res) => {
                setOrders(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {
            axios.get(`http://localhost:8060/order/searchOrdersByOrderId/${search}`).then((res) => {
                setOrders(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
    }*/


    /*function refreshPage() {
        window.location.reload();
    }*/


    return (
        <div className="page-component-body">
            <div className="table-emp">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Reservation</h3>
                    </div>
                    <a href="/empReport" class="float-right">
                        <button class="btn btn-ok white">
                            Add Reservation
                        </button>
                    </a>
                    <a href="/empReport" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Pending Reservation
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
                <table class="table table-hover">
                    <thead class="thead-dark">
                    <tr>                      
                        <th class="text-center">Customer</th>
                        <th class="text-center">Package Name</th>
                        <th class="text-center">Event Type</th>
                        <th class="text-center">From</th>
                        <th class="text-center">To</th> 
                        <th class="text-center">Discount</th>                      
                        <th class="text-center">Total</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody> 
                    {reservations.map((reservations) => {  
                         return (        
                             <tr>
                                    <td class="text-center">{reservations.customername}</td>
                                    <td class="text-center">{reservations.packagename}</td>
                                    <td class="text-center">{reservations.eventtype}</td>
                                    <td class="text-center">{moment(reservations.from).format('YYYY-MMMM-DD')}</td>
                                    <td class="text-center">{moment(reservations.to).format('YYYY-MMMM-DD')}</td>
                                    <td class="text-center">{reservations.discount}</td>
                                    <td class="text-center">{reservations.totalreservation}</td>
                                    <td class="text-center">{reservations.status}</td>
                                    <td class="text-center">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                {/*<button type="button" class="btn btn-light btn-sm">Update</button>*/}
                                    <Link class="btn btn-light btn-sm" to={`/updateReservation/${reservations.reservationid}`} role="button">Update</Link>

                                <button type="button" class="btn btn-danger btn-sm">Delete</button>
                    </div></td>

                </tr>
                         );
                    })}
          </tbody>
                </table>
            </div>
        </div>
    )
}

export default Viewreservation