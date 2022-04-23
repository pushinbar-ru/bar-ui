import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Eye } from "./Eye.svg"

export interface EyeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const EyeIcon = ({ size = 'medium', selected = false }: EyeProps) => (
  <Eye className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default EyeIcon