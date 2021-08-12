import React from 'react'


function viewreservation() {
    return (
        <div className="page-component-body">
            <div className="table-emp">
                <div class="row table-head">
                    <div class="col">
                        <h3 className="float-left">List of Reservation</h3>
                    </div>
                    <a href="/empReport" class="float-right">
                        <button class="btn btn-ok white">
                            Add Reservation
                        </button>
                    </a>
                    <a href="/empReport" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Pending Reservation
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
                        <th>Client</th>
                        <th>Event Type</th>
                        <th>Package Name</th>
                        <th>Rental Period</th>
                        <th>Total Reservation</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tbody>           
                <tr>
                  <td class="text-center">A</td>
                  <td class="text-center">C</td>
                  <td class="text-center">D</td>
                  <td class="text-center">E</td>
                  <td class="text-center">7</td>
                  <td class="text-center">y</td>
                  <td class="text-center"></td>
                </tr>
            
          </tbody>
                </table>
            </div>
        </div>
    )
}

export default viewreservation