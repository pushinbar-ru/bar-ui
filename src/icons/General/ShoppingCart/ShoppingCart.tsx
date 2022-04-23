import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ShoppingCart } from "./ShoppingCart.svg"

export interface ShoppingCartProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ShoppingCartIcon = ({ size = 'medium', selected = false }: ShoppingCartProps) => (
  <ShoppingCart className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ShoppingCartIcon