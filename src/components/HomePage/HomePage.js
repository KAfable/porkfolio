import React from "react"
import Gears from "../Icons/Gears"
import styles from "./homepage.module.scss"

export default () => (
  <div className={styles.banner}>
    <Gears className={styles.gearWrapper} />
    <h2>Kevin Afable</h2>
    <h3>Software Developer</h3>
  </div>
)
