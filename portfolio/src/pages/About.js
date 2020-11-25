import React from "react";
import { Link } from "react-router-dom";
import me from "../assets/DU-WOP.jpg";

const styles = {
    jumbotron: {
        textAlign: "center",
        marginTop: "10px",
        background: "none"
    },
    container: {
        backgroundColor: "rgba(0,0,0, 0.5)",
        borderRadius: "10px"
    },
    content:{
        marginTop: "15px",
        marginBottom: "15px",
        paddingbottom: "20px"
    },
    image: {
        width: "100%",
        height: "600px",
        margin: "0 auto",
        marginBottom: "20px",
        borderRadius: "5px"
    },
    text: {
        margin: "20px 50px",
        color: "white"
    },
}


function About() {
    return (
        <main className="container" style={styles.container}>
            <div className="row">
                <section className="col-12">
                <div className="jumbotron bg-transparent" style={styles.jumbotron}>
                    <h1 className="display-4 text-white">About Me</h1>
                    <hr className="my-4"/>
                    <p className="text-white">Learn a little bit more about me.</p>
                </div>
                </section>
            </div>
            <div className="row" style={styles.content}>
                <section className="col-sm-12 col-md-5">
                    <img src={me} alt="Austin Lambert" style={styles.image} />
                </section>
                <section className="col-sm-12 col-md-7" style={styles.textBox}>
                    <p style={styles.text}>
                        Hello! My name is Austin Lambert, and I am so happy to have you looking at my portfolio! As an insight on myself, I am a college graduate hailing from
                        Texas State University with a degree in Exercise Sports Science. While my original plan was to get my Doctorate of Physical Therapy, I realized that 
                        I needed to do something that would satisfy my creative itch. From there I found Web Development and I have never looked back.
                        With a new found passion, and a future full of possibilities, I am excited to continue my progress as a commited Full Stack Web Developer.
                    </p>
                    <p style={styles.text}>
                        With that said, you'd probably like to know more about my relevant skills. These involve:
                    </p>
                    <ul style={styles.text}>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>Node</li>
                        <li>SQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>APIs</li>
                        <li>Ajax</li>
                        <li>Express</li>
                        <li>jQuery</li>
                        <li>Progressive Web Applicaions</li>
                        <li>Webpack</li>
                    </ul>
                </section>
            </div>
            <div className="row" style={styles.content}>
                <section className="col-sm-12 col-md-4" style={{ color: "white", textAlign: "center" }}>
                    Resume-
                    <Link to={{ pathname: "https://docs.google.com/document/d/1VCvKsk2X-9qVyTUSzW4_EV9IYD_mzZfTjOEIolBdlSE/edit?usp=sharing" }} target="_blank">
                        LinkedIn
                    </Link>
                </section>
                <section className="col-sm-12 col-md-4" style={{ color: "white", textAlign: "center" }}>
                    LinkedIn-
                    <Link to={{ pathname: "https://www.linkedin.com/in/austin-lambert-73330919a/" }} target="_blank">
                        LinkedIn
                    </Link>
                </section>
                <section className="col-sm-12 col-md-4" style={{ color: "white", textAlign: "center" }}>
                    Github-
                    <Link to={{ pathname: "https://github.com/AusLam212" }} target="_blank">
                        Github
                    </Link>
                </section>
            </div>
        </main>
    );
}

export default About;