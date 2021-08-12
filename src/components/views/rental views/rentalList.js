import React from 'react'

function rentalList() {
    return (
        <div className="page-component-body">
            <div className="table-emp">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Rentals</h3>
                    </div>
                    <a href="/addRental" class="float-right">
                        <button class="btn btn-ok white">
                            + Add Rental
                        </button>
                    </a>
                    <a href="/updateRental" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Pending Rental
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
                        <th>Rent Id</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Vehicle</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {/* {this.generateTableRows(EmployeeList)} */}
                </table>
            </div>
        </div>
    )
}

export default rentalList
