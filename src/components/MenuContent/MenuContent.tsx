import React from 'react'
import { Link } from 'react-router-dom'

import styles from './MenuContent.module.css'

type MenuContentProps = {
  data: MenuContentDataItem[];
}

type MenuLink = {
  label: string;
  href: string;
}

export type MenuContentDataItem = {
  title: string;
  links: MenuLink[];
}

const MenuContent: React.FC<MenuContentProps> = ({ data }) => (
  <div className={styles.content}>
    {(data || []).map((item, index) => (
      <div className={styles.itemBlock} key={index}>
        <div className={styles.itemTitle}>
          <b>{item.title}</b>
        </div>
        <ul className={styles.itemLinks}>
          {item.links.map(({ label, href }) => (
            <li className={styles.link}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export default MenuContent
