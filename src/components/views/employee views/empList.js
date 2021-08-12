import React from 'react'

function empList() {
    return (
        <div className="page-component-body">
            <div className="table-emp">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Employees</h3>
                    </div>
                    <a href="/empReport" class="float-right">
                        <button class="btn btn-ok white">
                            Add Employee
                        </button>
                    </a>
                    <a href="/empReport" class="float-right ml-4">
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



                <table class="table table-striped table-primary">
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
              <th>Permanent Address</th>
                        <th>Mobile Number</th>
                        <th>Land Line Number</th>
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
                    {/* {this.generateTableRows(EmployeeList)} */}
                </table>
            </div>
        </div>
    )
}

export default empList
