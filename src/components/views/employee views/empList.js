import React, { Component } from "react";


import moment from 'moment';



import { getAllEmployeesService } from "../../services/employeeService";

import { Redirect } from "react-router";

export default class empList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empList: null,
            isFetching: false,
            redirect: null,
        };
    }

    componentDidMount() {
        if (!this.state.empList && !this.state.isFetching) {
            this.setState({ isFetching: true });
            getAllEmployeesService()
                .then((data) => {
                    console.log(data.data, "component did mount");
                    this.setState({ empList: data.data, isFetching: false });
                })
                .catch(() => this.setState({ isFetching: false }));
        }
    }

    componentDidUpdate() {
        if (!this.state.empList && !this.state.isFetching) {
            this.setState({ isFetching: true });
            getAllEmployeesService()
                .then((data) => {
                    console.log(data.data, "component did update");
                    this.setState({ empList: data.data, isFetching: false });
                })
                .catch(() => this.setState({ isFetching: false }));
        }
    }

    generateTableRows = (empList) => {
        console.log("data came for table");
        return empList.map((employee) => {

            return (
                <tbody>
                    <tr>
                        {/*<td>{employee.userId}</td>*/}
                        <td onClick={() => this.handleViewOnClick(employee.userId)}>
                            {employee.fName + " " + employee.lName}
                        </td>
                        {/*<td>{employee.LastName}</td>*/}
                        <td>{employee.nic}</td>
                        <td>{employee.email}</td>
                        <td>{moment(employee.DOB).format('YYYY-MMMM-D')}</td>
                        {/* <td>{employee.DOB}</td> */}
                        {/*<td>{employee.Age}</td>
           <td>{employee.Gender}</td>
            <td>{employee.MaritalStatus}</td>
            <td>{employee.CurrentAddress}</td>
            <td>{employee.PermanentAddress}</td>*/}
                        <td>{employee.mobileNo}</td>
                        {/*<td>{employee.LandLineNumber}</td>
            <td>{employee.EmergencyContact}</td>
                        <td>{employee.Designation}</td>
                        <td>{employee.Department}</td>
                        {/*<td>{employee.JoinedDate}</td>
            <td>{employee.PreviouslyWorkedCompany}</td>
            <td>{employee.YearsOfExperiance}</td>
            <td>{employee.EmployeePicture}</td>
      <td>{employee.CV}</td>*/}
                        <td>
                            <button
                                class="btn btn-light btn-sm"
                            // onClick={() => this.handleUpdateOnClick(employee.userId)}
                            >
                                update
                            </button>
                            <button
                                class="btn btn-danger btn-sm"
                            // onClick={() => this.handleDeleteOnClick(employee.userId)}
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            );
        });
    };

    render() {
        const { empList, isFetching, redirect } = this.state;
        if (redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        if (empList) {
            return (
                <div className="page-component-body" >

                    <div className="table-emp">
                        <div class="row table-head">
                            <div class="col">
                                <h3 className="float-left">List of Employees</h3>
                            </div>
                            <a href="/addEmployee" class="float-right">
                                <button class="btn btn-ok white">
                                    Add Employee
                                </button>
                            </a>
                            <a href="#" class="float-right ml-4">
                                <button class="btn btn-ok white">
                                    Past Employees
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
                                    {/*<th>Employee ID</th>*/}
                                    <th>Name</th>
                                    {/*<th>Last Name</th>*/}
                                    <th>NIC</th>
                                    <th>e-mail</th>
                                    <th>Date of Birth</th>
                                    {/*<th>Age</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Current Address</th>
                                <th>Permanent Address</th>*/}
                                    <th>Mobile Number</th>
                                    {/*<th>Land Line Number</th>
              <th>Emergency Contact Number</th>
                        <th>Designation</th>
                        <th>Department</th>
                        {/*<th>Joined Date</th>
              <th>Previosly Worked Company</th>
              <th>Years Of Experiance</th>
              <th>Employee Picture</th>
              <th>CV</th>*/}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {this.generateTableRows(empList)}
                        </table>
                    </div>
                </div >
            );

        } else if (isFetching) {

            console.log("data is fetching");
            return (
                <div div class="d-flex justify-content-center mt-5" >
                    <div class="spinner-grow text-primary mt-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary mt-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger mt-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            );
            /*<div>Loading.....!!!</div>*/
        }
        return <div className="text-center">No Data Found!</div>;
    }
}
