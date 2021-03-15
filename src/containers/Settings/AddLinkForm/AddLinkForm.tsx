import React, { useState } from 'react'
import { Form, FormButton, FormInput } from '@fluentui/react-northstar'
import { HorizontalMenuItem } from '../../../components/HorizontalMegaMenu/HorizontalMegaMenu';
import { MenuContentDataItem } from '../../../components/MenuContent/MenuContent';
import { useMenuContext } from '../../../contexts/menuList';

import styles from './AddLinkForm.module.css'

type AddLinkFormProps = {
  onSubmit: () => void;
  onCancel: () => void;
}

type FormTopMenuItem = {
  label: string;
  items: HorizontalMenuItem[];
}

const DEFAULT_TOP_MENU_ITEM: FormTopMenuItem = {
  label: '',
  items: [],
};

const DEFAULT_SECOND_LVL_ITEM = {
  label: '',
  items: [] as MenuContentDataItem[],
}

const DEFAULT_LAST_LVL_ITEM: MenuContentDataItem = {
  title: '',
  links: [],
}

const DEFAULT_LINK_IN_LAST_LVL = {
  label: '',
  href: '',
};

const AddLinkForm: React.FC<AddLinkFormProps> = ({ onSubmit }) => {
  const [menuItem, setMenuItem] = useState(DEFAULT_TOP_MENU_ITEM);
  const { addNewItem } = useMenuContext();

  const addSecondLvlMenu = () => {
    setMenuItem(prev => ({
      ...prev,
      items: [...prev.items, { ...DEFAULT_SECOND_LVL_ITEM, key: prev.items.length }],
    }));
  };

  const onChangeSecondLvlItem = (label: string, index: number) => {
    setMenuItem(prev => ({
      ...prev,
      items: [
        ...prev.items.slice(0, index),
        { ...prev.items[index], label },
        ...prev.items.slice(index + 1),
      ],
    }))
  }

  const onChangeLastLvlItem = (title: string, firstIndex: number, index: number) => {
    setMenuItem(prev => {
      const items = [...menuItem.items];
      items[firstIndex].items[index] = {
        ...items[firstIndex].items[index],
        title,
      };
      return { ...prev, items }
    });
  }

  const onChangeLinkOnLastLvlItem = (key: string, value: string, firstIndex: number, secondIndex: number, index: number) => {
    setMenuItem(prev => {
      const items = [...prev.items];
      items[firstIndex].items[secondIndex].links[index] = {
        ...items[firstIndex].items[secondIndex].links[index],
        [key]: value,
      };
      return { ...prev, items }
    });
  }

  const addLastLvlMenu = (index: number) => {
    setMenuItem(prev => {
      const items = [ ...prev.items ];
      items[index] = {
        ...items[index],
        items: [...items[index].items, { ...DEFAULT_LAST_LVL_ITEM }]
      };
      return { ...prev, items };
    });
  }

  const addLinkInLastLvl = (firstIndex: number, index: number) => {
    const items = [...menuItem.items];
    items[firstIndex].items[index].links = [
      ...items[firstIndex].items[index].links,
      { ...DEFAULT_LINK_IN_LAST_LVL }
    ]

    setMenuItem({ ...menuItem, items });
  }

  const onSubmitForm = () => {
    console.log(menuItem)
    addNewItem(menuItem);
    onSubmit();
  }

  const { label, items } = menuItem;

  return (
    <div className={styles.form}>
      <Form>
        <div className={styles.firstLvl}>
          <FormInput
            value={label}
            onChange={ ({ target: { value } }) => setMenuItem(prev => ({ ...prev, label: value })) }
            label="Top lvl label"
          />
          {items.map(({ label, items }, index) => (
            <div className={styles.secondLvl} key={index}>
              <FormInput
                value={label}
                label="Second lvl label"
                onChange={ ({ target: { value } }) => onChangeSecondLvlItem(value, index) }
              />
              {items.map(({ title, links }, idx) => (
                <div className={styles.lastLvl} key={idx}>
                  <FormInput
                    value={title}
                    label="last lvl title"
                    onChange={ ({ target: { value } }) => onChangeLastLvlItem(value, index, idx) }
                  />
                  {links.map(({ label, href }, linkIndex) => (
                    <div className={styles.linkBlock} key={linkIndex}>
                      <FormInput
                        value={label}
                        label="link label"
                        onChange={
                          ({ target: { value } }) => onChangeLinkOnLastLvlItem(
                            'label',
                            value,
                            index,
                            idx,
                            linkIndex
                          )
                        }
                      />
                      <FormInput
                        value={href}
                        label="link href"
                        onChange={
                          ({ target: { value } }) => onChangeLinkOnLastLvlItem(
                            'href',
                            value,
                            index,
                            idx,
                            linkIndex
                          )
                        }
                      />
                    </div>
                  ))}
                  <FormButton onClick={ () => addLinkInLastLvl(index, idx) }>
                    Add link
                  </FormButton>
                </div>
              ))}
              <FormButton onClick={() => addLastLvlMenu(index)}>
                Add last menu lvl
              </FormButton>
            </div>
          ))}
          <FormButton onClick={addSecondLvlMenu}>
            Add second lvl menu
          </FormButton>
        </div>
        <FormButton onClick={ onSubmitForm } content="Submit" />
      </Form>
    </div>
  )
}

export default AddLinkForm
