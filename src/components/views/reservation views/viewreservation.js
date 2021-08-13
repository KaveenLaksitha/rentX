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
                        <th class="text-center">Customer</th>
                        <th class="text-center">From</th>
                        <th class="text-center">To</th>
                        <th class="text-center">Event Type</th>
                        <th class="text-center">Package Name</th>
                        <th class="text-center">Reserve Period</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                    </tr>
                    <tbody>           
                <tr>
                  <td class="text-center">A</td>
                  <td class="text-center">C</td>
                  <td class="text-center">D</td>
                  <td class="text-center">A</td>
                  <td class="text-center">A</td>
                  <td class="text-center">E</td>
                  <td class="text-center">7</td>
                  <td class="text-center">y</td>
                  <td class="text-center">
                  <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="left">Left</button>
                       
                        <button type="button" class="right">Right</button>
                    </div></td>

                </tr>
            
          </tbody>
                </table>
            </div>
        </div>
    )
}

export default viewreservation