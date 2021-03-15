import React from 'react'
import cn from 'classnames'
import { Section, StyleConfig } from '../../types/react-mega-menu';
import HorizontalMegaMenu, { HorizontalMenuItem } from '../HorizontalMegaMenu/HorizontalMegaMenu';
import MegaMenu from '../MegaMenu/MegaMenu';

import styles from './MainMegaMenu.module.css'

type MainMegaMenuProps = {
  data: MainMenuDataItem[];
}

export type MainMenuDataItem = {
  label: string;
  key: number;
  items: HorizontalMenuItem[]
}

const styleConfig: StyleConfig = {
  containerProps: {
    className: styles.menuContainer,
  },
  contentProps: {
    className: styles.menuContent,
  },
  menuItemProps: {
    className: styles.menuItem
  },
  menuItemSelectedProps: {
    className: cn(styles.menuItem, styles.menuItemSelected),
  },
  menuProps: {
    className: styles.menu,
  },
};

const MainMegaMenu: React.FC<MainMegaMenuProps> = ({ data }) => {
  const menu: Section[] = data.map(({ items, label, key }) => ({
    label,
    key,
    items: <HorizontalMegaMenu data={items} />,
  }));

  return (
    <div className={ styles.mainMenu }>
      <MegaMenu
          data={menu}
          styleConfig={styleConfig}
        />
    </div>
  )
}

export default MainMegaMenu
