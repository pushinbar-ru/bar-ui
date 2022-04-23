import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Cloud } from "./Cloud.svg"

export interface CloudProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CloudIcon = ({ size = 'medium', selected = false }: CloudProps) => (
  <Cloud className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CloudIcon