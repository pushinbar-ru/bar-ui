import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Salad } from "./Salad.svg"

export interface SaladProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SaladIcon = ({ size = 'medium', selected = false }: SaladProps) => (
  <Salad className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SaladIcon