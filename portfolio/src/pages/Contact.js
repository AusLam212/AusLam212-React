import React from "react";

const styles = {
    jumbotron: {
        textAlign: "center",
        marginTop: "10px",
        background: "none"
    },
    container: {
        backgroundColor: "rgba(0,0,0, 0.5)",
        borderRadius: "10px",
        textAlign: "center"
    },
    content:{
        paddingBottom: "300px",
        textAlign: "center",
        color: "white",
        display: "inline-block",
        width: "50%"
    }
}


function Contact() {
    return(
        <main className="container" style={styles.container}>

            <div className="row">
                <section className="col-12">
                <div className="jumbotron bg-transparent" style={styles.jumbotron}>
                    <h1 className="display-4 text-white">Contact</h1>
                    <hr className="my-4"/>
                    <p className="text-white">Feel free to reach me at either my email or phone.</p>
                </div>
                </section>
            </div>
            <section className="row" style={styles.content}>
                <div className="col-xs-12">
                    <h2>Email:</h2>
                    <br/>
                    <div>atlambert11@gmail.com</div>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Phone:</h2>
                    <br/>
                    <div>(956)778-2171</div>
                </div>
            </section>
        </main>
    );
}

export default Contact;