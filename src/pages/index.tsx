import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import Intro from '../components/sections/intro'
import Skills from '../components/sections/skills'
import Projects from '../components/sections/projects';
import SEO from '../components/seo'

import './index.less'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `bent rynning`, `desing`]} />
    <Intro/>
    <Skills />
    <Projects list={data.allMarkdownRemark.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`