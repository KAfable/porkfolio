import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <header>
      <h2>Kevin Afable</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
