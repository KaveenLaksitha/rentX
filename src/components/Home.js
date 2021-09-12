import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header"
import Login from "./login"
import Dashboard from "./Dashboard"
import addRental from "./views/rental views/rentalPlacement"
import rentalList from "./views/rental views/rentalList"
import updateRental from "./views/rental views/updateRental"
import addReservation from "./views/reservation views/reservation"
import viewReservation from "./views/reservation views/viewreservation"
import updateReservation from "./views/reservation views/updatereservation"
import addEmployee from "./views/employee views/addEmployee"
import addVehicle from "./views/vehicle views/addVehicle";
import empList from "./views/employee views/empList";
import vehicleList from "./views/vehicle views/vehicleList";
import updateVehicle from "./views/vehicle views/updateVehicle";
import makeInquiry from "./views/employee views/makeInquiry";
import pastEmpList from "./views/employee views/pastEmployees"
import ReservationReport from "./views/reservation views/ReservationReport";
import EmployeeReport from "./views/employee views/EmployeeReport";
import RentalReport from "./views/rental views/RentalReport";
import VehicleReport from "./views/vehicle views/VehicleReport";
import Footer from "./Footer";
import RemovedRentalList from "./views/rental views/removedRentals";
import DeleteVehicles from "./views/vehicle views/deleteVehicles";
import DeleteReservation from "./views/reservation views/DeleteRecord";



function Home() {
    return (
        <Router>
            <div>
                <Header />



                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/addRental" exact component={addRental} />
                <Route path="/rentalList" exact component={rentalList} />
                <Route path="/updateRental/:rentalId" exact component={updateRental} />
                <Route path="/addReservation" exact component={addReservation} />
                <Route path="/viewReservation" exact component={viewReservation} />
                <Route path="/updateReservation/:RID" exact component={updateReservation} />
                <Route path="/diplay/RemoveReservationlist" exact component={DeleteReservation} />
                <Route path="/addEmployee" exact component={addEmployee} />
                <Route path="/addVehicle" exact component={addVehicle} />
                <Route path="/empList" exact component={empList} />
                <Route path="/vehicleList" exact component={vehicleList} />
                <Route path="/updateVehicle" exact component={updateVehicle} />
                <Route path="/makeInquiry" exact component={makeInquiry} />
                <Route path="/pastEmpList" exact component={pastEmpList} />
                <Route path="/reservation/report" exact component={ReservationReport} />
                <Route path="/employee/report" exact component={EmployeeReport} />
                <Route path="/rental/report" exact component={RentalReport} />
                <Route path="/vehicle/report" exact component={VehicleReport} />
                <Route path="/rental/removedRentalList" exact component={RemovedRentalList} />
                <Route path="/deleteVehicles" exact component={DeleteVehicles} />
                <Footer />
            </div>
        </Router>
    );
}

export default Home;
