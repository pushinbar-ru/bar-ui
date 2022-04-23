import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CloudOff } from "./CloudOff.svg"

export interface CloudOffProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CloudOffIcon = ({ size = 'medium', selected = false }: CloudOffProps) => (
  <CloudOff className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CloudOffIcon