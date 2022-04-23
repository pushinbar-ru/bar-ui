import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ArrowRight } from "./ArrowRight.svg"

export interface ArrowRightProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ArrowRightIcon = ({ size = 'medium', selected = false }: ArrowRightProps) => (
  <ArrowRight className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ArrowRightIcon