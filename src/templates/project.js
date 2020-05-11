import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";

export default props => {
    return (
        <Layout>
            <div>Under construction</div>
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
