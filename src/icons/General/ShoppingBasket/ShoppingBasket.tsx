import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ShoppingBasket } from "./ShoppingBasket.svg"

export interface ShoppingBasketProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ShoppingBasketIcon = ({ size = 'medium', selected = false }: ShoppingBasketProps) => (
  <ShoppingBasket className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ShoppingBasketIcon