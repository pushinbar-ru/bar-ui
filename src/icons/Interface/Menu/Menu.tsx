import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Menu } from "./Menu.svg"

export interface MenuProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const MenuIcon = ({ size = 'medium', selected = false }: MenuProps) => (
  <Menu className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default MenuIcon