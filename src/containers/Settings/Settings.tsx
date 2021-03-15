import React from 'react'
import { Header } from '@fluentui/react-northstar'
import LinksTree from './LinksTree/LinksTree';
import AddMenuItemModal from './AddMenuItemModal/AddMenuItemModal';

import styles from './Settings.module.css'

const Settings = () => {

  return (
    <div className={styles.page}>
      <Header
        as="h2"
        content="Configure navigation"
        description={{
          content: 'The mega menu can be configured here',
          as: 'span',
        }}
      />
      <Header
        as="h3"
        content="Add navigation entries"
        description={{
          content: 'Here\'s an example of how a section can be used to group inputs',
          as: 'span',
        }}
      />

      <div className={styles.control}>
        <AddMenuItemModal />
      </div>

      <div className={styles.linksWrapper}>
        <LinksTree />
      </div>
    </div>
  )
}

export default Settings
