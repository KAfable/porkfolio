import React from "react"
import Layout from "../components/Layout/Layout"

import { graphql, useStaticQuery } from "gatsby"

// query all of the posts
// map them through specific posts

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {console.log(data)}
      {data.allMarkdownRemark.nodes.map(({ frontmatter: { title, date } }) => (
        <div>
          <h2>{title}</h2>
          <time>{date}</time>
          <p>time to read: {5}</p>
          <p>tags</p>
        </div>
      ))}
    </Layout>
  )
}
