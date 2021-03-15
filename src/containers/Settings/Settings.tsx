import React, { useState } from 'react'
import { Button, Header, Dialog, Input, } from '@fluentui/react-northstar'
import LinksTree from './LinksTree/LinksTree';
import { useMenuContext } from '../../contexts/menuList';

import styles from './Settings.module.css'

const Settings = () => {
  const { items } = useMenuContext();

  const formAddNewMenu = (
    <div className={styles.formContainer}>

    </div>
  );

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
          content: 'You can add entries here',
          as: 'span',
        }}
      />

      <div className={styles.control}>
        <Dialog
          content={
            <div>test</div>
          }
          trigger={ <Button primary content="Add entry" /> }
        />
      </div>

      <LinksTree data={items} />
    </div>
  )
}

export default Settings
