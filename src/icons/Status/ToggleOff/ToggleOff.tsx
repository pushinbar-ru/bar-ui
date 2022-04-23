import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ToggleOff } from "./ToggleOff.svg"

export interface ToggleOffProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ToggleOffIcon = ({ size = 'medium', selected = false }: ToggleOffProps) => (
  <ToggleOff className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ToggleOffIcon