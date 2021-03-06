import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router";
import Swal from 'sweetalert2'
import Header from '../../Header';
import TestModal from "./modals/reservationview";
import UpdateReservationModal from "./modals/updatereservation"

function Viewreservation() {

    const [viewreservation, setviewreservation] = useState([]);
    const [search, setSearch] = useState("");

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchReservation();

        } else {
            function getReservation() {
                axios.get("https://rent-x-api.herokuapp.com/reservations/displayReservation").then((res) => {
                    setviewreservation(res.data.reverse());
                }).catch((error) => {

                    setModalLoading(true);
                })
            }
            getReservation();

        }


    }, [])


    useEffect(() => {

        //console.log("component did update", modalDataDelete)

    }, [modalDataDelete]);


    const openModal = (reservations) => {
        setData(reservations);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        // console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    //set delete modal
    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true)

    }

    //set update modal
    const openModalUpdate = (data) => {
        //console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }

    //search all completed record after clicking completed button
    function pendingRecords() {
        function getPendingReservation() {
            axios.get("https://rent-x-api.herokuapp.com/reservations/searchCompletedReservationRecords/").then((res) => {
                setviewreservation(res.data.reverse());
            }).catch((error) => {
                alert(error.message);
            })
        }
        getPendingReservation();
    }


    //search customer nic and package name after the search
    function searchReservation(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {
            axios.get(`https://rent-x-api.herokuapp.com/reservations/searchReservationRecs/${search}`).then((res) => {

                setviewreservation(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {

            axios.get(`https://rent-x-api.herokuapp.com/reservations/searchReservationRecordsX/${search}`).then((res) => {

                setviewreservation(res.data);
            }).catch((error) => {
                alert(error.message);

            })
        }
    }


    //handle delete from reservation and add to the remove reservation list
    const deleteReservation = async (data) => {

        await axios.post("https://rent-x-api.herokuapp.com/deletedReservations/addRemovedReservation", { data }).then(() => {

            Swal.fire({
                title: "Completed Reservation removed! ",
                text: "Reservation removed",
                icon: 'success',
                confirmButtonColor: "#207159",

            })

            const value = axios.post("https://rent-x-api.herokuapp.com/reservations/deleteReservation", modalDataDelete);

            if (value) {

                Swal.fire({
                    title: 'Success!',
                    text: `${"Reservation Deleted Successfully"}`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                }
                ).then(() => {
                    window.location.reload();
                })

            }

        }).catch((err) => {

            Swal.fire({
                title: 'Oops!',
                text: `${"Reservation not Completed"}`,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            }
            )

        })

    }

    //refresh the page
    function refreshPage() {
        window.location.reload();
    }


    return (
        <div className="page-component-body">
            <Header></Header>
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
                        <h3 className="float-left" onClick={refreshPage}>List of Reservation</h3>
                    </div>

                    <a href="/addReservation" class="float-right">
                        <button class="btn btn-ok white">
                            +Add Reservation
                        </button>
                    </a>
                    <p class="float-right ml-4">
                        <button class="btn btn-ok white" id="pending" onClick={pendingRecords}>
                            Completed Reservation
                        </button>
                    </p>
                    <a href="/diplay/RemoveReservationlist" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Past Records
                        </button>
                    </a>
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form onSubmit={searchReservation} >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        value={search} onChange={(event) => { setSearch(event.target.value) }} require />
                                    <button class="btn search_icon" id="submit" name="submit" type="submit" ><i class="fa fa-search" ></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-hover" id="myTable">
                    <thead class="thead-dark">
                        <tr>
                            <th class="text">Customer</th>
                            <th class="text">NIC</th>
                            <th class="text">Package Name</th>
                            <th class="text">Event Type</th>
                            <th class="text">From</th>
                            <th class="text">To</th>
                            <th class="text-center">Total</th>
                            <th class="text-right">Status</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewreservation.map((reservations) => {
                            return (
                                <tr>
                                    <td class="text" onClick={() => openModal(reservations)} data-toggle="tooltip" data-placement="right" title="Click to view reservation" className="view-td">{reservations.customername}</td>
                                    <td class="text">{reservations.customernic}</td>
                                    <td class="text">{reservations.packagename}</td>
                                    <td class="text">{reservations.eventtype}</td>
                                    <td class="text">{moment(reservations.from).format('YYYY-MMMM-DD')}</td>
                                    <td class="text">{moment(reservations.to).format('YYYY-MMMM-DD')}</td>
                                    <td class="text-right">{reservations.totalreservation.toFixed(2)}</td>
                                    <td class="text-right">{reservations.status}</td>
                                    <td class="text">
                                        <div class="btn-group" role="group" aria-label="Basic example">

                                            <Link class="btn btn-light btn-sm" onClick={() => openModalUpdate(reservations)}  >update</Link>

                                            <Link class="btn btn-danger btn-sm" onClick={() => { openModalDelete(reservations) }} role="button"> remove</Link>

                                        </div></td>

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
                    <div className="row">
                        <div className="col -6">
                            <button type="submit" className="btn btn-delete" onClick={() => { deleteReservation(modalDataDelete); }}>
                                Confirm
                            </button>
                        </div>
                        <div className="col-6   text-right" onClick={() => setModalDeleteConfirm(false)}>
                            <button type="reset" className="btn btn-reset">
                                cancel
                            </button>
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>
            {/* modal for display while loading or on error */}
            <Modal show={modalLoading} size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <div class="d-flex justify-content-center mt-2">
                        <div class="spinner-grow text-danger" role="status">
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                        </div><div class="spinner-grow text-danger" role="status">
                        </div>

                        <span class="sr-only">something went wrong...</span>
                    </div>
                    <div class="d-flex justify-content-center mt-4 h5"> something went wrong</div>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { window.location.reload() }}>
                            Try again
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* modal for update the data of employee */}
            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdateReservationModal
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>


        </div>
    )
}

export default Viewreservation


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

{/*to={`/updateReservation/${reservations.reservationid}`}*/ }