import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import styles from "./project.module.scss";

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

export const projectQuery = graphql`
    query projectQuery($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                published
                tech
            }
            html
        }
    }
`;
