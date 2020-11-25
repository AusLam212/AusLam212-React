import React from "react";
import ProjectL from "../components/ProjectL";
import ProjectR from "../components/ProjectR";

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
            <ProjectL />
            <ProjectR />
            <ProjectL />
            <ProjectR />
            <ProjectL />
            <ProjectR />
        </main>
    );
}

export default Portfolio;