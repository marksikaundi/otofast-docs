import React from 'react'
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div><span>&copy; {new Date().getFullYear()} Otofast Project</span> </div>
      <div></div>
    </div>
  )
}

export default Footer
