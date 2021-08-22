import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";


import TestModal from "./viewVehicle";

function VehicleList() {

    const [vehicles, setVehicles] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    // const [modalDelete, setModalDelete] = useState(false);


    useEffect(() => {

        function getVehicles() {
            axios.get("http://localhost:4000/vehicle/view").then((res) => {


                setVehicles(res.data.reverse());
                console.log("Data recieved");
            }).catch((error) => {
                alert(error.message);
            })

        }

        getVehicles();

    }, []);


    const deleteVehicle = async (data) => {

        await axios.post("http://localhost:4000/vehicleRemove/addRemoveVehicle", { data }).then(() => {
            alert("**Vehicle Record added successfully")

            const value = axios.post("http://localhost:4000/vehicle/deleteV", modalDataDelete);
            console.log("deletedddd",value);
            if (value) {
                alert("**Permenantly deleted the Vehicle Record");
                // window.location.replace("/viewReservation");
                window.location.reload()
            }

        }).catch((err) => {
            alert("enne na")

            //alert(err.response.data.errorCode)

        })

    }






    const openModal = (vehicle) => {
        setData(vehicle);
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
                        <h3 className="float-left">List of vehicle</h3>
                    </div>
                    <a href="/addVehicle" class="float-right">
                        <button class="btn btn-ok white">
                            Add Vehicle
                        </button>
                    </a>
                    <a href="#" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Deleted Vehicle
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
                            <th class="text-center">Vehicle Reg No</th>
                            <th class="text-center">Brand</th>
                            <th class="text-center">Modal</th>
                            <th class="text-center">Type</th>
                            <th class="text-right">Rate</th>
                            <th class="text-center">Years Of Rent </th>
                            <th class="text-center">Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {vehicles.map((vehicles) => {

                            return (
                                <tr>
                                    <td onClick={() => openModal(vehicles)} data-toggle="tooltip" data-placement="right" title="Click to view details">
                                        {vehicles.VehicleRegNo}
                                    </td>

                                    <td class="text-center">{vehicles.VehicleBrand}</td>
                                    <td class="text-center">{vehicles.VehicleModel}</td>
                                    <td class="text-center">{vehicles.VehicleType}</td>
                                    <td class="text-right">{vehicles.RatePDay.toFixed(2)}</td>
                                    <td class="text-center">{vehicles.YearsRent}</td>
                                    <td class="text-center">
                                        <button
                                            class="btn btn-light btn-sm"
                                        // onClick={() => this.handleUpdateOnClick(employee.userId)}
                                        >
                                            update
                                        </button>
                                        <button
                                            id="btnDelete"
                                            class="btn btn-danger btn-sm"
                                            onClick={() => openModalDelete(vehicles)}
                                        >
                                            delete
                                        </button>

                                    </td>


                                </tr>
                            );


                        })}


                    </tbody>
                </table>
            </div>

            {/* modal for delete employee record*/}
            <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
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
                        <button type="submit" className="btn btn-delete" onClick={() => { deleteVehicle(modalDataDelete); }}>
                            Confirm
                        </button>
                    </div>
                    <div className="col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                        <button type="reset" className="btn btn-reset">
                            cancel
                        </button>
                    </div>
                </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default VehicleList;
