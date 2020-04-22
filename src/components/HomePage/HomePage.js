import React from "react"
import Gears from "../Icons/Gears.jsx"
import Loader from "../Icons/Loader.jsx"
import styles from "./homepage.module.scss"

export default () => (
  <div className={styles.banner}>
    {/* <Gears className={styles.svgWrapper} /> */}
    <Loader className={styles.svgWrapper} />
    <h2>Kevin Afable</h2>
    <h3>Software Developer</h3>
  </div>
)
