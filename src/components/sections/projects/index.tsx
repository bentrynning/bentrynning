import React from 'react'
import { Link } from 'gatsby'

const Projects = ({ list }) => {
  return (
    <section>
      <h1 className="title text-l">Projects</h1>
      {list.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Projects
