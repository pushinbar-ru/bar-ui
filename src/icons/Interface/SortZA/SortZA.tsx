import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as SortZA } from "./SortZA.svg"

export interface SortZAProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SortZAIcon = ({ size = 'medium', selected = false }: SortZAProps) => (
  <SortZA className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SortZAIcon