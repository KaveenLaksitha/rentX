import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";

function Home() {
    return (
        <Router>
            <div>
                <Header />
            </div>
        </Router>
    );
}

export default Home;
