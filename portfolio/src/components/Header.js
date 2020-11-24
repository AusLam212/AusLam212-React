import React from "react";


const styles = {
    header: {
        backgroundColor: "black",
        color: "white"
    },
    li: {
        margin: "0 10px"
    }
}



function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={styles.header}>
            <li className="navbar-brand" style={styles.li}>Austin Lambert</li>
        </nav>
  );
}

export default Header;