import React from 'react'
import MainMegaMenu from '../../components/MainMegaMenu/MainMegaMenu'
import { useMenuContext } from '../../contexts/menuList';

import styles from './Dashboard.module.css'

const Dashboard = () => {
  const { items } = useMenuContext();

  return (
    <div className={styles.page}>
      <div className={styles.menuWrapper}>
        <MainMegaMenu data={items} />
      </div>
    </div>
  )
}

export default Dashboard
