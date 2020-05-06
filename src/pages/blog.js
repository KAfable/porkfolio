import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "gatsby";

import { graphql, useStaticQuery } from "gatsby";

// create a table of content entry
// title, date published, time to read, preview text
// icon
// borders

const getAllPosts = graphql`
    query getPosts {
        allMarkdownRemark(
            filter: { frontmatter: { template: { eq: "blog" } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                frontmatter {
                    title
                    date
                    published
                }
                fields {
                    slug
                }
                excerpt
                timeToRead
                internal {
                    description
                }
            }
        }
    }
`;

export default () => {
    const {
        allMarkdownRemark: { nodes },
    } = useStaticQuery(getAllPosts);

    return (
        <Layout>
            {nodes.map(
                ({
                    frontmatter: { title, date, published },
                    fields,
                    excerpt,
                    timeToRead,
                }) => {
                    if (published) {
                        return (
                            <div key={fields.slug}>
                                <h2>
                                    <Link to={`/blog/${fields.slug}`}>
                                        {title}
                                    </Link>
                                </h2>
                                <time>{date || "?/??/????"}</time>
                                <p>time to read: {timeToRead}</p>
                                <p>{excerpt}</p>
                                <p>tags</p>
                            </div>
                        );
                    }
                    return <></>;
                }
            )}
        </Layout>
    );
};
