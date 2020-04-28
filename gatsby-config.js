// Docs: https://www.gatsbyjs.org/docs/gatsby-config/
// this is also a nodeJS file

module.exports = {
  siteMetadata: {
    title: "Kevin Afable",
    author: "Kevin Afable",
    description: "Personal site of Kevin Afable, sometimes known as Vyraal1",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
