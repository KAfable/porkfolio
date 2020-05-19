import React from "react";
import Resume from "../../../static/Resume.pdf";
import styles from "./contact.module.scss";

export default () => (
    <div className={styles.contact}>
        <h2 className={styles.contactHeader}>Contact</h2>
        <p>
            I'm always down to chat with people. My preferred platform to talk
            about anything ranging from software development to what I'm
            currently reading is <span>Discord</span>. I've made several lasting
            friends on there and that is where I'm most responsive.
        </p>
        <p>
            If you'd like to contact me, feel free to reach out at{" "}
            <a className={styles.contact} href="mailto:kevin.afable@gmail.com">
                kevin.afable@gmail.com
            </a>{" "}
            or reach out to me any other of the other platforms below. Just a
            head's up I'm also currently looking for my next opportunity.
        </p>
        <ul>
            <li>
                GitHub:{" "}
                <a className={styles.contact} href="https://github.com/KAfable">
                    KAfable
                </a>
            </li>
            <li>
                Twitter:{" "}
                <a className={styles.contact} href="https://twitter.com/home">
                    @Vyraal1
                </a>
            </li>
            <li>
                LinkedIn:{" "}
                <a
                    className={styles.contact}
                    href="https://www.linkedin.com/in/kevinafable/"
                >
                    kevinafable
                </a>
            </li>
            <li>
                Resume:{" "}
                <a className={styles.contact} href={Resume}>
                    PDF
                </a>
            </li>
            <li>
                Discord: <span>Vyraal1#0001</span>
            </li>
        </ul>
    </div>
);
