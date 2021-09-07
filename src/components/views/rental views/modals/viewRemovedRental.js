import React from "react";
import { Modal } from "react-bootstrap";


function ViewRemovedRental(rental) {

    console.log("model openingggg", rental)

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Customer Name : {rental.data.customerName + " " + rental.data.customerNIC}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Rental Record Id
                                    </th>
                                    <td class="text-left">{rental.data.id}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Rental Duration From
                                    </th>
                                    <td class="text-left">{rental.data.from}</td>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Rental Duration To
                                    </th>
                                    <td class="text-left">{rental.data.to}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Rental Return Date
                                    </th>
                                    <td class="text-left">{rental.data.returnDate}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Rental Status
                                    </th>
                                    <td class="text-left">{rental.data.status}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Rented Vehicle
                                    </th>
                                    <td class="text-left">{rental.data.vehicleType + " " + rental.data.model}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Final Price
                                    </th>
                                    <td class="text-left">{rental.data.finalPrice}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Contact Number
                                    </th>
                                    <td class="text-left">{rental.data.contactNo}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Penalty Charges
                                    </th>
                                    <td class="text-left">{rental.data.penaltyCharges}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-close" onClick={rental.onHide}>Close</button>
            </Modal.Footer>
        </div>
    )
}

export default ViewRemovedRental