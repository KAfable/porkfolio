import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => {
  return (
    <header>
      <div className={styles.container}>
        <h1>
          <Link to="/">KA</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link className={styles.link} to="/">
                home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/projects/">
                projects
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/resume">
                resume
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/about">
                about
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
