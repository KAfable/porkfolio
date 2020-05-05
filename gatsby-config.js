// Docs: https://www.gatsbyjs.org/docs/gatsby-config/
// this is also a nodeJS file

module.exports = {
    siteMetadata: {
        title: "Kevin Afable",
        author: "Kevin Afable",
        description:
            "Personal site of Kevin Afable, sometimes known as Vyraal1",
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-prismjs",
                        classPrefix: "language-",
                        inlineCodeMarker: null,
                        aliases: {
                            js: "javascript",
                        },
                        showLineNumbers: false,
                        noInlineHighlight: false,
                        prompt: {
                            user: "root",
                            host: "localhost",
                            global: false,
                        },
                        escapeEntities: {},
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
    ],
};
