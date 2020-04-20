import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => {
  return (
    <header>
      <h2>{"Kevin Afable"}</h2>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/projects/">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
