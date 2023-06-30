import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Criador de Avatar</h1>
        <p>Construa o seu próprio avatar!</p>
      </div>
    </header>
  )
}

export default Header
