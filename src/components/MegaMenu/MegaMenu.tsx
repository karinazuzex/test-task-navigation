import React from 'react'
//@ts-ignore
import { ReactMegaMenu } from 'react-mega-menu'
import { Props } from '../../types/react-mega-menu';

// this need for types react-mega-menu package
const MegaMenu: React.FC<Props> = (props) => {
  return <ReactMegaMenu { ...props } />
}

export default MegaMenu
