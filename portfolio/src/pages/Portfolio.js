import React from "react";
import ProjectL from "../components/ProjectL";
import ProjectR from "../components/ProjectR";
import pixelpicks from "../assets/PixelPicks.png";
import weather from "../assets/WeatherDash.png";
import empdir from "../assets/emp-dir.png";
import band from "../assets/BandAids.png";
import budget from "../assets/Budget-PWA.png";
import password from "../assets/Password.png";
import pifa from "../assets/PIFA.png";

const styles = {
    jumbotron: {
        textAlign: "center",
        marginTop: "10px",
        background: "none"
    },
    container: {
        backgroundColor: "rgba(0,0,0, 0.5)",
        borderRadius: "10px"
    }
}

function Portfolio() {
    return (
        <main className="container" style={styles.container}>
            <div className="row">
                <section className="col-12">
                <div className="jumbotron bg-transparent" style={styles.jumbotron}>
                    <h1 className="display-4 text-white">Projects</h1>
                    <hr className="my-4"/>
                    <p className="text-white">Take a look at what I've been working on.</p>
                </div>
                </section>
            </div>
            <ProjectL image={pixelpicks} alt={"Pixel Picks"} title={"Pixel Picks"} url={"https://codyalmand.github.io/Pixel-Picks/"} git={"https://github.com/codyalmand/Pixel-Picks"} >
                Pixel Picks is an application that randomly chooses a movie and a video game based on what what feeling you want out of the game. This project utilizes the RAWG Video Game Databse API, and the OMDb Movie Databse API. 
            </ProjectL>
            <ProjectR image={weather} alt={"Weather Dashboard"} title={"Weather Dashboard"} url={"https://auslam212.github.io/WeatherDashboard/"} git={"https://github.com/AusLam212/WeatherDashboard"}>
                Weather Dashboard utilized the openweathermap Api to give users a daily forecast as well as a five day forecast. The user can search any city they want, and the daily forecast includes a UV INdex as well.
            </ProjectR>
            <ProjectL image={empdir} alt={"Employee Directory"} title={"Ultimate Employee Directory Deluxe"} url={"https://auslam212.github.io/Ultimate-Employee-Directory-Deluxe/"} git={"https://github.com/AusLam212/Ultimate-Employee-Directory-Deluxe"}>
                Ultimate Employee Directory Deluxe allows for simple way of tracking important, non-sensetive employee information. It mainly utilizes React.
            </ProjectL>
            <ProjectR image={band} alt={"Band Aids"} title={"Band Aids"} url={"https://band-aids.herokuapp.com/"} git={"https://github.com/Manii-dot/Band-Aids"}>
                Band Aids allows bands to post event information for local shows and shares that information with other users. It utilizes MySQL to store the event data.
            </ProjectR>
            <ProjectL image={password} alt={"Password Generator"} title={"Password Generator"} url={"https://auslam212.github.io/Javascript-Password-Generator/"} git={"https://github.com/AusLam212/Javascript-Password-Generator"}>
                Password Generator creates a password based on the prerequisites given by the user (character length, special characters, lowercase, uppercase). It utilizes mostly javascript.
            </ProjectL>
            <ProjectR image={budget} alt={"Progressive Budgeting"} title={"Progressive Budgeting"} url={"https://progressive-budgeting.herokuapp.com/"} git={"https://github.com/AusLam212/Progressive-Budgeting-App"}>
                Progressive Budgeting App is a simple PWA that allows the user to log transactions online and offline.
            </ProjectR>
            <ProjectL image={pifa} alt={"Pay It Forward Austin"} title={"Pay It Forward Austin"} url={"https://pifa-by-project3.herokuapp.com/"} git={"https://github.com/codyalmand/PIFA"}>
                Receive and give help to your community with PIFA (Pay It Forward Austin). PIFA uses React, Express, Node, and Sequelize.
            </ProjectL>
        </main>
    );
}

export default Portfolio;