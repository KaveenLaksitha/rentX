import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./login"
import addRental from "./views/rental views/rentalPlacement"
import addEmployee from "./views/employee views/addEmployee"
import addVehicle from "./views/vehicle views/addVehicle";

function Home() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/login" exact component={Login} />
                <Route path="/addRental" exact component={addRental} />
                <Route path="/addEmployee" exact component={addEmployee} />
                <Route path= "/addVehicle" exact component ={addVehicle} />
            </div>
        </Router>
    );
}

export default Home;
