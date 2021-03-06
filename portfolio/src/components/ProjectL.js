import React from "react";

const styles = {
    jumbotron: {
        textAlign: "center",
        marginTop: "10px",
        background: "none"
    },
    image: {
        width: "100%",
        height: "300px",
        margin: "0 auto",
        marginBottom: "20px",
        borderRadius: "5px"
    },
    text: {
        margin: "20px 50px",
        color: "white"
    },
    title: {
        textAlign: "center",
        color: "white"
    },
    links: {
        textAlign: "center",
        color: "white"
    }
}

function ProjectL(props) {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-5">
                <img src={props.image} alt={props.alt} style={styles.image} />
            </div>
            <div className="col-sm-12 col-md-7">
                <div className="row" style={styles.title}>
                    <div className="col-12">
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="row" style={styles.text}>
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
                <div className="row" style={styles.links}>
                    <div className="col-12">
                        <a href={props.url} target="_blank" rel="noreferrer">
                            {props.title}
                        </a>
                        |
                        <a href={props.git } target="_blank" rel="noreferrer">
                            Github Repository
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectL;