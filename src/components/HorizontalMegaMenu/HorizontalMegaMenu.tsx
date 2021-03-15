import React from 'react'
import cn from 'classnames'
import { StyleConfig } from '../../types/react-mega-menu';
import MegaMenu from '../MegaMenu/MegaMenu';
import MenuContent, { MenuContentDataItem } from '../MenuContent/MenuContent';

import styles from './HorizontalMegaMenu.module.css'

const styleConfigSub: StyleConfig = {
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

type HorizontalMenuProps = {
  data: HorizontalMenuItem[];
}

export type HorizontalMenuItem = {
  label: string;
  items: MenuContentDataItem[];
  key: number;
}

const HorizontalMegaMenu: React.FC<HorizontalMenuProps> = ({ data }) => {
  const menuData = data.map(({ items, label, key }) => ({
    label,
    key,
    items: <MenuContent data={items} key={key} />,
  }));

  return (
    <div className={styles.horizontalMenu}>
      <MegaMenu
        data={menuData}
        styleConfig={styleConfigSub}
      />
    </div>
  )
}

export default HorizontalMegaMenu
