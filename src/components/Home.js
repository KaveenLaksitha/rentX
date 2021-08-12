import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./login"
import addRental from "./views/rental views/rentalPlacement"
import addEmployee from "./views/employee views/addEmployee"
import empList from "./views/employee views/empList"
import makeInquiry from "./views/employee views/makeInquiry"

function Home() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/login" exact component={Login} />
                <Route path="/addRental" exact component={addRental} />
                <Route path="/addEmployee" exact component={addEmployee} />
                <Route path="/empList" exact component={empList} />
                <Route path="/makeInquiry" exact component={makeInquiry} />
            </div>
        </Router>
    );
}

export default Home;
