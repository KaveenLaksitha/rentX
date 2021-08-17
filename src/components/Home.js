import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./login"
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


import Footer from "./Footer";

function Home() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/login" exact component={Login} />
                <Route path="/addRental" exact component={addRental} />
                <Route path="/rentalList" exact component={rentalList} />
                <Route path="/updateRental/:rentalId" exact component={updateRental} />
                <Route path="/addReservation" exact component={addReservation} />
                <Route path="/viewReservation" exact component={viewReservation} />
                <Route path="/updateReservation/:RID" exact component={updateReservation} />
                <Route path="/addEmployee" exact component={addEmployee} />
                <Route path="/addVehicle" exact component={addVehicle} />
                <Route path="/empList" exact component={empList} />
                <Route path="/vehicleList" exact component={vehicleList} />
                <Route path="/updateVehicle" exact component={updateVehicle} />
                <Route path="/makeInquiry" exact component={makeInquiry} />
                <Route path="/pastEmpList" exact component={pastEmpList} />
                <Footer />
            </div>
        </Router>
    );
}

export default Home;
