import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


function ViewRental(rental) {

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
                                        Rental Status
                                    </th>
                                    <td class="text-left">{rental.data.status}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Payment Method
                                    </th>
                                    <td class="text-left">{rental.data.payment}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Rented Vehicle
                                    </th>
                                    <td class="text-left">{rental.data.vehicleType + " " + rental.data.model}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Pick-Up Address
                                    </th>
                                    <td class="text-left">{rental.data.pickAddress}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Additional Payment
                                    </th>
                                    <td class="text-left">{rental.data.addPrice}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Advanced Payment
                                    </th>
                                    <td class="text-left">{rental.data.advPayment}</td>
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
                                        Customer Address
                                    </th>
                                    <td class="text-left">{rental.data.customerAdd}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={rental.onHide}>Close</Button>
            </Modal.Footer>
        </div>
    )
}

export default ViewRental
