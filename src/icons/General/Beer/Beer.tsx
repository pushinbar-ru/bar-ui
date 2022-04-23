import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Beer } from "./Beer.svg"

export interface BeerProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BeerIcon = ({ size = 'medium', selected = false }: BeerProps) => (
  <Beer className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BeerIcon