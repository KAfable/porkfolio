import React from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import { Link } from "gatsby";

export default props => {
    const {
        data: {
            allMarkdownRemark: { nodes },
        },
    } = props;
    console.log(nodes);
    return (
        <Layout>
            {nodes.map(node => {
                const { title, template } = node.frontmatter;
                const { slug } = node.fields;
                // return <div key={title}>{title}</div>;
                return <Card title={title} url={`/${template}/${slug}`} />;
            })}
        </Layout>
    );
};

// Get an array of all the projects
// get the relevant preview information for each
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
