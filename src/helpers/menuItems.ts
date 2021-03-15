import { MainMenuDataItem } from '../components/MainMegaMenu/MainMegaMenu';
import { DEFAULT_MENU_ITEMS } from '../constants/common';

const MENU_ITEMS = 'MENU_ITEMS'

export function setMenuItems(items: MainMenuDataItem[]) {
  window.localStorage.setItem(MENU_ITEMS, JSON.stringify(items));
}

export function getMenuItems(): MainMenuDataItem[] {
  let items = window.localStorage.getItem(MENU_ITEMS);

  if (!items) {
    items = JSON.stringify(DEFAULT_MENU_ITEMS);
    setMenuItems(DEFAULT_MENU_ITEMS);
  }

  return JSON.parse(items);
}
