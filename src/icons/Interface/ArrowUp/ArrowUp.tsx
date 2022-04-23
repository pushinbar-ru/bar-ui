import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ArrowUp } from "./ArrowUp.svg"

export interface ArrowUpProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ArrowUpIcon = ({ size = 'medium', selected = false }: ArrowUpProps) => (
  <ArrowUp className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ArrowUpIcon