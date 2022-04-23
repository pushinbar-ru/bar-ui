import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Check } from "./Check.svg"

export interface CheckProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CheckIcon = ({ size = 'medium', selected = false }: CheckProps) => (
  <Check className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CheckIcon