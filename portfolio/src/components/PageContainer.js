import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import lava from "../assets/Lava.jpg";




const styles = {
    background: {
        backgroundImage: `url(${lava})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "font-family: 'Bebas Neue', cursive;"
    }
};

function PageContainer() {
    return(
        <Router>
            <div style={styles.background}>
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