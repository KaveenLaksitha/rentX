import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import moment from 'moment';

//import TestModal from "./modals/viewRental";
import ViewRemovedRental from "./modals/viewRemovedRental";
import Header from "../../Header";

function RemovedRentalList() {

    const [rentalList, setRentalList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);



    useEffect(() => {

        /*if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            //searchRentals();
 
        } else*/
        function getRentals() {
            axios.get("https://rent-x-api.herokuapp.com/deletedRentals/displayRemovedRentals").then((res) => { //normally the fetched rental record details are displayed through this
                //setRentals(res.data.reverse());
                setRentalList(res.data.reverse());
            }).catch((error) => {
                //alert(error.message);
                setModalLoading(true);
            })
        }
        getRentals();




    }, [])


    const openModal = (rental) => {
        setData(rental);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        console.log("req came for modal");
        console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }


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
                <ViewRemovedRental
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>
            <div className="table-emp ">
                <div class="row table-head mt-3">
                    <div class="col">
                        <h3 className="float-left">Completed Rentals</h3>
                    </div>
                    <p class="float-right ml-4">
                        <Link class="link" to={`/rentalList`}><button class="btn btn-ok white" id="pending" >
                            Main List
                        </button> </Link>
                    </p>
                </div>

                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th class="text">From</th>
                            <th class="text">To</th>
                            <th class="text">Return Date</th>
                            <th class="text">Vehicle Type</th>
                            <th class="text-center">NIC</th>
                            <th class="text-center">Penalty (Rs.)</th>
                            <th class="text-center">Total (Rs.)</th>
                            <th class="text-center">Last Paid (Rs.)</th>
                            <th class="text-center">Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rentalList.map((rental) => {
                            return (

                                <tr >

                                    <td onClick={() => openModal(rental)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                        {/*<Link class="link" to={`/rental/getRentalByID/${rentals.id}`}>*/}{rental.from}{/*</Link>*/}</td>
                                    <td class="text">{rental.to}</td>
                                    <td class="text">{moment(rental.returnDate).format('YYYY-MMMM-DD')}</td>
                                    <td class="text">{rental.vehicleType + " " + rental.model}</td>
                                    <td class="text-center">{rental.customerNIC}</td>
                                    <td class="text-right">{rental.penaltyCharges.toFixed(2)}</td>
                                    <td class="text-right">{rental.finalPrice.toFixed(2)}</td>
                                    <td class="text-right">{rental.lastPaid.toFixed(2)}</td>
                                    <td class="text-right">{rental.status}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>


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



        </div >
    )
}

export default RemovedRentalList;