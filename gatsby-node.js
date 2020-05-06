const path = require("path");
const slugify = require("./util/slugify");
// this file accesses the different node API's used to build a site
// a node is a data structure within Gatsby that stores specific data like content or titles
// this is one of the API's that lets you control the data while it is in the GraphQL data layer before you query it

// this let's you access the createNode, aka when Gatsby creates nodes from Transformer Remark
// on your GraphQL Data layer, and you can run this code
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    // create an appropriate slug from the title if markdown
    if (node.internal.type === "MarkdownRemark") {
        const title = node.frontmatter.title;
        const value = slugify(title);
        createNodeField({
            node,
            name: "slug",
            value,
        });
    }
};

const slugQuery = `
    query getSlugs {
        allMarkdownRemark {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    template
                }
            }
        }
    }
`;

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const {
        data: {
            allMarkdownRemark: { nodes },
        },
    } = await graphql(slugQuery);

    nodes.forEach(node => {
        let template = node.frontmatter.template;
        const component = path.resolve(`src/templates/${template}.js`);
        createPage({
            component,
            path: `/${template}/${node.fields.slug}`,
            // context is an object that can be accessed by the template
            context: {
                slug: node.fields.slug,
            },
        });
    });
};
