import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header2";

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
