import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Forward } from "./Forward.svg"

export interface ForwardProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ForwardIcon = ({ size = 'medium', selected = false }: ForwardProps) => (
  <Forward className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ForwardIcon