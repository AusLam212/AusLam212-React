import React from "react";
import me from "../assets/DU-WOP.jpg";

const styles = {
    image: {
        width: "100%",
        height: "600px"
    },
    textBox: {
        borderTop: "1px solid black",
        borderRight: "1px solid black",
        borderBottom: "1px solid black"
    },
    text: {
        margin: "10px 20px"
    }
}

function About() {
    return (
        <main className="container">
            <div className="row">
                <section className="col-sm-12 col-md-6">
                    <img src={me} alt="Austin Lambert" style={styles.image} />
                </section>
                <section className="col-sm-12 col-md-6" style={styles.textBox}>
                    <p style={styles.text}>
                        Hello! My name is Austin Lambert, and I am so happy to have you looking at my portfolio! As an insight on myself, I am a committed 
                    </p>
                </section>
            </div>
        </main>
    );
}

export default About;