import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";

// cannot use useStaticQuery
// instead you have to export the query since Gatsby can pick it up and run it for you
// context object is not available with useStaticQuery
export const postQuery = graphql`
    query postQuery($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                published
            }
            html
        }
    }
`;

export default props => {
    const {
        data: {
            markdownRemark: { frontmatter, html },
        },
    } = props;
    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Layout>
    );
};
