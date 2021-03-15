import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { MainMenuDataItem } from '../components/MainMegaMenu/MainMegaMenu';
import { getMenuItems, setMenuItems } from '../helpers/menuItems';

export type MenuContextType = {
  items: MainMenuDataItem[];
  updateItems: (items: MainMenuDataItem[]) => void;
  addNewItem: (item: Omit<MainMenuDataItem, 'key'>) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const useMenuContext = () => {
  const menuItems = useContext(MenuContext);

  if (!menuItems) {
    throw new Error('You can use `useMenuContext` only inside MenuContext Consumer')
  }

  return menuItems;
}

export const MenuContextProvider: React.FC<unknown> = ({ children }) => {
  const [items, setItems] = useState<MainMenuDataItem[]>([]);

  useEffect(() => {
    setItems(getMenuItems());
  }, []);

  const updateItems = useCallback((items: MainMenuDataItem[]) => {
    setItems(items);
    setMenuItems(items);
  }, []);

  const addNewItem = useCallback((item: Omit<MainMenuDataItem, 'key'>) => {
    setItems(prev => {
      const newItems = [...prev, { ...item, key: prev.length + 1 }];
      setMenuItems(newItems);
      return newItems;
    });
  }, []);

  const menuContextValue: MenuContextType = useMemo(() => ({
    updateItems,
    addNewItem,
    items: items,
  }), [items, updateItems, addNewItem]);

  return (
    <MenuContext.Provider value={menuContextValue}>
      {children}
    </MenuContext.Provider>
  );
}
