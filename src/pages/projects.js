import React from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import { graphql } from "gatsby";
import styles from "./projects.module.scss";

export default props => {
    const {
        data: {
            allMarkdownRemark: { nodes },
        },
    } = props;
    console.log(nodes);
    return (
        <Layout>
            <section>
                {nodes.map(node => {
                    const {
                        title,
                        template,
                        previewImg,
                        previewText,
                    } = node.frontmatter;
                    const { slug } = node.fields;
                    return (
                        <Card
                            key={title}
                            title={title}
                            url={`/${template}/${slug}`}
                            img={
                                previewImg
                                    ? previewImg.childImageSharp.fixed
                                    : false
                            }
                            desc={previewText}
                        />
                    );
                })}
            </section>
        </Layout>
    );
};

// Get an array of all the projects
// get the relevant preview information for each

// how do we get the preview images of each projecft
export const getAllProjects = graphql`
    query getAllProjects {
        allMarkdownRemark(
            sort: { order: ASC, fields: frontmatter___priority }
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
                    previewText
                    previewImg {
                        childImageSharp {
                            fixed(width: 200) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    }
`;
