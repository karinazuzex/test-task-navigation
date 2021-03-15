import React from 'react'
import { MainMenuDataItem } from '../../../components/MainMegaMenu/MainMegaMenu'
import { TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar'
import { HorizontalMenuItem } from '../../../components/HorizontalMegaMenu/HorizontalMegaMenu'
import { Tree, TreeItemProps } from '@fluentui/react-northstar'
import { MenuContentDataItem } from '../../../components/MenuContent/MenuContent'

import styles from './LinksTree.module.css'

type LinksTreeProps = {
  data: MainMenuDataItem[];
}

const getItemsForLastLvlTree = (items: MenuContentDataItem[], key: string): TreeItemProps['items'] => items.map(({ title, links }, index) => ({
  id: `links-tree-level-3-${key}-${index}`,
  title,
  items: links.map(({ label }, idx) => ({
    id: `links-tree-level-3-${key}-${index}-${idx}`,
    title: label,
  })),
}));

const getItemsForTree = (items: HorizontalMenuItem[], index: number): TreeItemProps['items'] => items.map(({ label, items, key }) => ({
  id: `links-tree-level-2-${index}-${key}`,
  title: label,
  items: getItemsForLastLvlTree(items, `${index}-${key}`),
}));

const titleRenderer: TreeItemProps['renderItemTitle'] = (Component, { content, expanded, hasSubtree, ...restProps }) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {hasSubtree && (expanded ? <TriangleDownIcon /> : <TriangleEndIcon />)}
    {content}
  </Component>
)

const LinksTree: React.FC<LinksTreeProps> = ({ data }) => {
  const treeItems = (data || []).map(({ items, label, key }, index) => ({
    id: `links-tree-level-1-${key}`,
    title: label,
    items: getItemsForTree(items, index),
  }));

  return (
    <div className={styles.linksTree}>
      <Tree
        items={treeItems}
        renderItemTitle={titleRenderer}
      />
    </div>
  )
}

export default LinksTree
