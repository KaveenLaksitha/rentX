import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./login"

function Home() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/login" exact component={Login} />
            </div>
        </Router>
    );
}

export default Home;
