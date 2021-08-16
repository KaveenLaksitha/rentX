import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import TestModal from "./modals/viewRental";
import DeleteModal from "./modals/deleteRental"


function RentalList() {

    const [rentals, setRentals] = useState([]);
    const [search, setSearch] = useState("");
    const [rentalList, setRentalList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchRentals();

        } else {
            function getRentals() {
                axios.get("http://localhost:4000/rental/displayRentals").then((res) => { //normally the fetched rental record details are displayed through this
                    //setRentals(res.data.reverse());
                    setRentalList(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getRentals();

        }


    }, [])

    useEffect(() => {

        console.log("component did update", modalDataDelete)

    }, [modalDataDelete]);



    const openModal = (rental) => {
        setData(rental);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        console.log("req came for modal");
        console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }


    function pendingRecords() {
        function getPendingRentals() {
            axios.get("http://localhost:4000/rental/searchPendingRentalRecords/").then((res) => {
                //setRentals(res.data.reverse());
                setRentalList(res.data.reverse());
            }).catch((error) => {
                alert(error.message);
            })
        }
        getPendingRentals();
    }


    function searchRentals(e) {
        e.preventDefault();
        if (search.substring(0, 4) === "2021") {
            axios.get(`http://localhost:4000/rental/searchByFromDate/${search}`).then((res) => {
                //setRentals(res.data);
                setRentalList(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
        else if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`http://localhost:4000/rental/searchRentalRecs/${search}`).then((res) => {
                //setRentals(res.data);
                setRentalList(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {

            axios.get(`http://localhost:4000/rental/searchRentalRecordsX/${search}`).then((res) => {
                //setRentals(res.data);
                setRentalList(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }

    }





    function refreshPage() {
        window.location.reload();
    }



    return (
        <div className="page-component-body">
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <TestModal
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>
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
                            <th>NIC</th>
                            <th>Customer Name</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rentalList.map((rental) => {
                            return (

                                <tr >

                                    <td onClick={() => openModal(rental)} data-toggle="tooltip" data-placement="right" title="Click to view details">
                                        {/*<Link class="link" to={`/rental/getRentalByID/${rentals.id}`}>*/}{rental.from}{/*</Link>*/}</td>
                                    <td >{rental.to}</td>
                                    <td >{rental.vehicleType}</td>
                                    <td >{rental.customerNIC}</td>
                                    <td >{rental.customerName}</td>
                                    <td >{rental.finalPrice}</td>
                                    <td >{rental.status}</td>
                                    <td>

                                        <Link class="btn btn-light btn-sm" to={`/updateRental/${rental.id}`} role="button"> Update</Link>
                                        <Link class="btn btn-danger btn-sm" onClick={() => openModalDelete(rental)} role="button"> Remove</Link>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this item ?</p>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { setModalDelete(true); setModalDeleteConfirm(false); }}>
                            Confirm
                        </button>
                    </div>
                    <div className="col py-3 text-center" onClick={() => setModalDeleteConfirm(false)}>
                        <button type="reset" className="btn btn-reset">
                            cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* open delete form */}
            <Modal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <DeleteModal
                    data={modalDataDelete}
                    onHide={() => setModalDelete(false)}
                />
            </Modal>



        </div >
    )
}

export default RentalList;
