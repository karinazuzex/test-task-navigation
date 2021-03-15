import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header>
        <div></div>
      </header>
      <div className={styles.header}>
        <div className={ styles.link }>
          <NavLink to={ROUTES.DASHBOARD} activeClassName={styles.active}>Dashboard</NavLink>
        </div>
        <div className={ styles.link }>
          <NavLink to={ROUTES.SETTINGS} activeClassName={styles.active}>Settings</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
