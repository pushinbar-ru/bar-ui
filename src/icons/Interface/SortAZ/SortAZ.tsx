import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as SortAZ } from "./SortAZ.svg"

export interface SortAZProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SortAZIcon = ({ size = 'medium', selected = false }: SortAZProps) => (
  <SortAZ className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SortAZIcon