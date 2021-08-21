import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Modal, Button } from "react-bootstrap";
import { useParams} from "react-router";

import TestModal from "./modals/reservationview";

function Viewreservation() {


    //const [reservations, setReservations] = useState([]);
    const [viewreservation, setviewreservation] = useState([]);
    const [search, setSearch] = useState("");
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchReservation();

        } else {
            function getReservation() {
        axios.get("http://localhost:4000/reservations/displayReservation").then((res) => {
            setviewreservation(res.data.reverse());
        }).catch((error) => {
          //alert(error.message);
          setModalLoading(true);
        })
    }
    getReservation();

}


}, [])

    
        useEffect(() => {

            console.log("component did update", modalDataDelete)
    
        }, [modalDataDelete]); 


    const openModal = (reservations) => {
        setData(reservations);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        console.log("req came for modal");
        console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }
   

    const openModalDelete = (data) => {
        setModalDataDelete(data);        
        setModalDeleteConfirm(true)
        //deleteReservation(data);
        //setModalDeleteConfirm(true);
    }

    function pendingRecords() {
        function getPendingReservation() {
            axios.get("http://localhost:4000/reservations/searchPendingReservationRecords/").then((res) => {
                //setRentals(res.data.reverse());
                setviewreservation(res.data.reverse());
            }).catch((error) => {
                alert(error.message);
            })
        }
        getPendingReservation();
    }



    function searchReservation(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`http://localhost:4000/reservations/searchReservationRecs/${search}`).then((res) => {
                //setRentals(res.data);
                setviewreservation(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {

            axios.get(`http://localhost:4000/reservations/searchReservationRecordsX/${search}`).then((res) => {
                //setRentals(res.data);
                setviewreservation(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
    }

    

    

const deleteReservation = async (data) => {

        await axios.post("http://localhost:4000/deletedReservations/addRemovedReservation", { data }).then(() => {
            alert("Reservation Record added successfully")

            const value = axios.post("http://localhost:4000/reservations/deleteReservation", modalDataDelete);
            //console.log(value);
            if (value) {
                alert("Permenantly deleted the Reservation Record");
                window.location.replace("/viewReservation");
            }

        }).catch((err) => {
            alert(err.response.data.error)

            //alert(err.response.data.errorCode)

        })

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
                        <h3 className="float-left">List of Reservation</h3>
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
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form onSubmit={searchReservation} >
                                <input class="search_input" type="text" name="search" placeholder="Search..."
                                value={search} onChange={(event) => { setSearch(event.target.value) }} require  />
                                <button class="btn search_icon" id="submit" name="submit" type="submit" ><i class="fa fa-search" ></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-hover" id= "myTable">
                    <thead class="thead-dark">
                    <tr>                      
                        <th class="text-center">Customer</th>
                        <th class="text-center">NIC</th>
                        <th class="text-center">Package Name</th>
                        <th class="text-center">Event Type</th>
                        <th class="text-center">From</th>
                        <th class="text-center">To</th>                       
                        <th class="text-center">Total</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody> 
                    {viewreservation.map((reservations) => {  
                         return (        
                             <tr>
                                    <td class="text-center" onClick={() => openModal(reservations)} data-toggle="tooltip" data-placement="right" title="Click to view reservation">{reservations.customername}</td>
                                    <td class="text-center">{reservations.customernic}</td>
                                    <td class="text-center">{reservations.packagename}</td>
                                    <td class="text-center">{reservations.eventtype}</td>
                                    <td class="text-center">{moment(reservations.from).format('YYYY-MMMM-DD')}</td>
                                    <td class="text-center">{moment(reservations.to).format('YYYY-MMMM-DD')}</td>
                                    <td class="text-right">{reservations.totalreservation.toFixed(2)}</td>
                                    <td class="text-center">{reservations.status}</td>
                                    <td class="text-center">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                {/*<button type="button" class="btn btn-light btn-sm">Update</button>*/}
                                    <Link class="btn btn-light btn-sm" to={`/updateReservation/${reservations.reservationid}`} role="button">Update</Link>

                                    <Link class="btn btn-danger btn-sm" onClick={() => {openModalDelete(reservations)}} role="button"> Remove</Link>

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
                    <div className="col py-3 text-center" onClick={() => setModalDeleteConfirm(false)}>
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