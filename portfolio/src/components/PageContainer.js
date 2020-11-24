import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Nav";
import Footer from "./Footer";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function PageContainer() {
    return(
        <Router>
            <div>
                <Header />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    )
}

export default PageContainer;