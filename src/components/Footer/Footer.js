import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// favicon
// github
// linkedin
// twitter

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                    description
                }
            }
        }
    `);
    return (
        <footer>
            <p>Icon by Freepik</p>
        </footer>
    );
};
