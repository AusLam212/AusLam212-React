import React from "react";

const styles = {
    footer: {
        padding: "15px",
        textAlign: "center",
        color: "white",
        width: "100%",
    }
}

function Footer() {
    return (
        <footer className="footer " style={styles.footer}>
            <small style={styles.small}>
                &copy; Copyright 2020 Austin Lambert
            </small>
        </footer>
    )
}

export default Footer;