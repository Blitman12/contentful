import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Posts from "../components/posts"
import Ending from "../components/ending"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Gatsby-Netlify-Contentful blog</h1>
    <p>
      This is a simple blog showing sports teams. Some of these teams have names
      from books (can you guess the book?){" "}
    </p>
    <Posts data={data} />
    <Ending />
  </Layout>
)

export const linkQuery = graphql`
  query MyQuery {
    allContentfulBlog {
      group(field: contentful_id) {
        nodes {
          slug
        }
      }
    }
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default IndexPage
