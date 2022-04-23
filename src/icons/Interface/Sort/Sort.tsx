import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Sort } from "./Sort.svg"

export interface SortProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SortIcon = ({ size = 'medium', selected = false }: SortProps) => (
  <Sort className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SortIcon