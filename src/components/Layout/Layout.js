import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";

import styles from "./layout.module.scss";

export default props => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{props.children}</div>
            <Footer />
        </div>
    );
};
