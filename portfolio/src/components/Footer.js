import React from "react";

const styles = {
    footer: {
        padding: "15px",
        textAlign: "center",
        color: "black",
        position: "fixed",
        bottom: "0%",
        width: "100%"
    }
}

function Footer() {
    return (
        <footer class="footer" style={styles.footer}>
            <small>
                &copy; Copyright 2020 Austin Lambert
            </small>
        </footer>
    )
}

export default Footer;