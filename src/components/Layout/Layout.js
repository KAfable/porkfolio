import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer"

import styles from "./layout.module.scss"

export default props => {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
