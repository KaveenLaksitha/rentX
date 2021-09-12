import React from 'react'

function SideBar() {
    return (
        <div>
            <div className="area"></div>
            <nav className="main-menu fixed-top">
                <ul>
                    <hr></hr>
                    <li>
                        <a href="/dashboard">
                            <i className="fa fa-th fa-2x"></i>
                            <span className="nav-text">Dashboard</span>
                            <i className="fa fa-angle-right fa-2x"></i>
                        </a>
                    </li>
                    <hr></hr>
                    <li className="has-subnav">
                        <li data-toggle="collapse" data-target="#new1" className="collapsed">
                            <a href="javascript:void(0)">  <i className="fa fa-clock-o fa-2x"></i> <span className="nav-text">Rentals</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                        </li>
                        <ul className="sub-menu collapse" id="new1">
                            <li className="has-subnav">
                                <a href="/rentalList">
                                    <i className="fa  fa-2x"></i>
                                    <span className="nav-text">Rentals List</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>
                            <li className="has-subnav ">
                                <a href="/addRental">
                                    <i className="fa"></i>
                                    <span className="nav-text">Add Rentals</span>
                                    <i className="fa fa-angle-right fa-3x"></i>
                                </a>
                            </li>
                        </ul>
                        <li>
                        </li>
                    </li>
                    <hr></hr>
                    <li className="has-subnav">
                        <li data-toggle="collapse" data-target="#new2" className="collapsed">
                            <a href="javascript:void(0)" >  <i className="fa fa-calendar fa-2x"></i> <span className="nav-text">Reservations</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                        </li>
                        <ul className="sub-menu collapse" id="new2">
                            <li className="has-subnav">
                                <a href="/viewReservation">
                                    <i className="fa  fa-2x"></i>
                                    <span className="nav-text"> Reservations List</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>
                            <li className="has-subnav ">
                                <a href="/addReservation">
                                    <i className="fa"></i>
                                    <span className="nav-text">Add Reservation</span>
                                    <i className="fa fa-angle-right fa-3x"></i>
                                </a>
                            </li>

                        </ul>
                        <li>
                        </li>
                    </li>
                    <hr></hr>
                    <li className="has-subnav">
                        <li data-toggle="collapse" data-target="#new3" className="collapsed">
                            <a href="javascript:void(0)">  <i className="fa fa-car fa-2x"></i> <span className="nav-text">Vehicle Inventory</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                        </li>
                        <ul class="sub-menu collapse" id="new3">
                            <li class="has-subnav ">
                                <a href="/vehicleList ">
                                    <i class="fa"></i>
                                    <span className="nav-text">Vehicle List</span>

                                    <i class="fa fa-angle-right fa-3x"></i>
                                </a>
                            </li>
                            <li className="has-subnav">
                                <a href="/addVehicle">
                                    <i className="fa  fa-2x"></i>
                                    <span class="nav-text">Add Vehicle</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                        <li>
                        </li>
                    </li>
                    <hr></hr>
                    <li className="has-subnav">
                        <li data-toggle="collapse" data-target="#new4" className="collapsed">
                            <a href="javascript:void(0)">  <i className="fa fa-users fa-2x"></i> <span className="nav-text">Employees</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                        </li>
                        <ul className="sub-menu collapse" id="new4">
                            <li className="has-subnav ">
                                <a href="/empList">
                                    <i className="fa"></i>
                                    <span className="nav-text">Employee List</span>
                                    <i className="fa fa-angle-right fa-3x"></i>
                                </a>
                            </li>
                            <li className="has-subnav">
                                <a href="/addEmployee">
                                    <i className="fa  fa-2x"></i>
                                    <span className="nav-text">Add New Employee</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li className="has-subnav">
                        <li data-toggle="collapse" data-target="#new" className="collapsed">
                            <a href="javascript:void(0)">  <i className="fa fa-file-pdf-o fa-2x"></i> <span className="nav-text">Reports</span> <i className="fa fa-angle-right fa-animate fa-2x"></i></a>
                        </li>
                        <ul className="sub-menu collapse" id="new">
                            <li className="has-subnav ">
                                <a href="/employee/report">
                                    <i className="fa"></i>
                                    <span className="nav-text">Employees</span>
                                    <i className="fa fa-angle-right fa-3x"></i>
                                </a>
                            </li>
                            <li className="has-subnav">
                                <a href="/rental/report">
                                    <i className="fa  fa-2x"></i>
                                    <span className="nav-text">Rentals</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>
                            <li className="has-subnav">
                                <a href="/reservation/report">
                                    <i className="fa fa-2x"></i>
                                    <span className="nav-text">Reservations</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>
                            <li className="has-subnav">
                                <a href="/vehicle/report">
                                    <i className="fa fa-2x"></i>
                                    <span className="nav-text">Vehicle Inventory</span>
                                    <i className="fa fa-angle-right fa-2x"></i>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="/makeInquiry">
                            <i className="fa fa-question-circle-o fa-2x"></i>
                            <span className="nav-text">Make an Inquiry</span>
                            <i className="fa fa-angle-right fa-2x"></i>
                        </a>
                    </li>
                    <hr></hr>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar
