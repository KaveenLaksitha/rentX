import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


function Reservationview(reserve) {

    console.log("model openingggg", reserve)

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Customer Name : {reserve.data.customername}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Customer Name : 
                                    </th>
                                    <td class="text-left">{reserve.data.customername}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Customer Contact No :
                                    </th>
                                    <td class="text-left">{reserve.data.contactnumber}</td>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Customer Address :
                                    </th>
                                    <td class="text-left">{reserve.data.customeraddress}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Customer NIC :
                                    </th>
                                    <td class="text-left">{reserve.data.customernic}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Package Name :
                                    </th>
                                    <td class="text-left">{reserve.data.packagename}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Event Type : 
                                    </th>
                                    <td class="text-left">{reserve.data.eventtype}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        From :
                                    </th>
                                    <td class="text-left">{reserve.data.from}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        To :
                                    </th>
                                    <td class="text-left">{reserve.data.to}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Advanced Payment :
                                    </th>
                                    <td class="text-left">{reserve.data.advancedpayment}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Total Reservation : 
                                    </th>
                                    <td class="text-left">{reserve.data.totalreservation}</td>
                                </tr>
                                 <tr>
                                    <th class="text-left" scope="row">
                                        Status : 
                                    </th>
                                    <td class="text-left">{reserve.data.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={reserve.onHide}>Close</Button>
            </Modal.Footer>
        </div>
    )
}

export default Reservationview
