import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ShoppingBag } from "./ShoppingBag.svg"

export interface ShoppingBagProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ShoppingBagIcon = ({ size = 'medium', selected = false }: ShoppingBagProps) => (
  <ShoppingBag className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ShoppingBagIcon