import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function DeleteRental(rental) {


    const [modalData, setData] = useState(rental);
    const [rentalData, setRentalData] = useState({});

    console.log("model openingggg deleteee", rental.data)


    const deleteRental = async (data) => {

        await axios.post("http://localhost:4000/deletedRentals/addRemovedRentalRec", { data }).then(() => {
            //alert("Completed Rental Record successfully removed of customer " + rental.data.customerNIC)
            Swal.fire({
                title: "Completed Rental Record successfully removed! ",
                text: `${rental.data.customerNIC}` + "associated record is removed",
                icon: 'success',
                confirmButtonColor: "#207159",

            })
            const value = axios.post("http://localhost:4000/rental/deleteRental", modalData);
            //console.log(value);
            if (value) {
                //alert("Permenantly deleted the record " + rental.data.id);
                Swal.fire({
                    title: "Permenantly deleted the record! ",
                    text: `${rental.data.id}` + " record deleted",
                    icon: 'error',
                    confirmButtonColor: "#207159",
                }).then((res) => {
                    if (res.isConfirmed) {
                        window.location.replace('/rentalList');
                    }
                })

            }

        }).catch((err) => {
            //alert(err.response.data.error)
            //alert(err.response.data.errorCode)
            Swal.fire({
                title: "Internal Server Error ",
                text: `${err.response.data.error}`,
                icon: 'error',
                confirmButtonColor: "#207159",

            })

        })

    }



    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Customer Name : {rental.data.customerName + " " + rental.data.customerNIC}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addVerifyform" action="post" className="form"
                        // onSubmit={sendData}
                        >
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="vehicle">Vehicle:</label>
                                    <input
                                        required
                                        id="vehicle"
                                        type="text"
                                        className="form-control "
                                        placeholder="vehicle"
                                        disabled
                                        value={rental.data.vehicleType + " " + rental.data.model}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="status">Status:</label>
                                    <input
                                        required
                                        id="status"
                                        type="text"
                                        className="form-control "
                                        placeholder="status "
                                        disabled
                                        value={rental.data.status}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="penalty">Penalty Charge:</label>
                                    <input
                                        required
                                        id="penalty"
                                        type="text"
                                        className="form-control "
                                        placeholder="penalty"
                                        disabled
                                        value={rental.data.penaltyCharges}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label" for="price">Final Price:</label>
                                    <input
                                        required
                                        id="price"
                                        type="text"
                                        className="form-control "
                                        placeholder="price"
                                        disabled
                                        value={rental.data.finalPrice}
                                    />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className="col py-3 text-center">
                    <button type="submit" className="btn btn-delete"
                        onClick={() => deleteRental(rental.data)}>
                        Remove
                    </button>
                </div>
                <div className="col py-3 text-center" onClick={rental.onHide}>
                    <button type="reset" className="btn btn-reset">
                        cancel
                    </button>
                </div>
                {/* <Button onClick={emp.onHide}>Close</Button> */}
            </Modal.Footer>
        </div>
    )
}

export default DeleteRental