import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Design and Code by:</p>
        <a href="https://github.com/alexlima2023" target='_blank'>Alex Lima</a>
        <a href="https://github.com/leonardormoraes" target='_blank'>Leonardo Moraes</a>
      </div>
    </footer>
  )
}

export default Footer
