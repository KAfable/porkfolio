import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";

export default props => {
    return (
        <Layout>
            <div>This is the project page template</div>
        </Layout>
    );
};

export const getAllProjects = graphql`
    query getAllProjects {
        allMarkdownRemark(
            filter: { frontmatter: { template: { eq: "project" } } }
        ) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    title
                    tech
                    template
                }
            }
        }
    }
`;
