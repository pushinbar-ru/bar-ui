import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ToggleOn } from "./ToggleOn.svg"

export interface ToggleOnProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ToggleOnIcon = ({ size = 'medium', selected = false }: ToggleOnProps) => (
  <ToggleOn className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ToggleOnIcon