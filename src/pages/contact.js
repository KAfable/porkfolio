import React from "react";
import Layout from "../components/Layout/Layout";
import Resume from "../../static/Resume.pdf";

export default () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>
                I'm always down to chat with people. My preferred platform to
                talk about anything ranging from software development to what
                I'm currently reading is Discord.
            </p>
            <p>
                I'm also currently looking for my next opportunity, if you'd
                like to contact me, feel free to reach out at
                <a href="mailto:kevinafable@gmail.com">
                    {" "}
                    kevinafable@gmail.com
                </a>{" "}
                or reach out to me any other of the other platforms below.
            </p>
            <ul>
                <li>
                    GitHub: <a href="https://github.com/KAfable">KAfable</a>
                </li>
                <li>
                    Twitter: <a href="https://twitter.com/home">Vyraal1</a>
                </li>
                <li>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/kevinafable/">
                        kevinafable
                    </a>
                </li>
                <li>
                    Resume: <a href={Resume}>PDF</a>
                </li>
                <li>Discord: Vyraal1#0001</li>
            </ul>
        </Layout>
    );
};
