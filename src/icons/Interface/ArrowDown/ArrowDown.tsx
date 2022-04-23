import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ArrowDown } from "./ArrowDown.svg"

export interface ArrowDownProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ArrowDownIcon = ({ size = 'medium', selected = false }: ArrowDownProps) => (
  <ArrowDown className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ArrowDownIcon