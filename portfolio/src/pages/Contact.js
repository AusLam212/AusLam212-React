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
        paddingBottom: "15px",
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
                    <p className="text-white">Feel free to leave a name and an email for me to reach you at.</p>
                </div>
                </section>
            </div>
            <section className="row" style={styles.content}>
                <div className="col-xs-12">
                    <form>
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label for="message">Message:</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Contact;