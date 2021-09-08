import React from 'react'

function Dashboard() {
    return (
        <div className="page-component-body">
            <div className=" container comp-one">
            </div>

            <div class="container mt-3">
                <div class="row">
                    <div class="col-sm comp-one mx-3 my-3">
                    </div>
                    <div class="col-sm comp-one mx-3 my-3"></div>
                </div>
            </div>

            <div className="links">
                <h3>Quick Links</h3>
                <a className="qlink" href="/rentalList">Car availability</a><span>|</span>
                <a className="qlink" href="/addVehicle">Add new vehicle</a><span>|</span>
                <a className="qlink" href="/addEmployee">Add new employee</a>
            </div>

        </div>
    )
}

export default Dashboard
