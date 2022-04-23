import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CloudCheck } from "./CloudCheck.svg"

export interface CloudCheckProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CloudCheckIcon = ({ size = 'medium', selected = false }: CloudCheckProps) => (
  <CloudCheck className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CloudCheckIcon