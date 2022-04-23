import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Clock } from "./Clock.svg"

export interface ClockProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ClockIcon = ({ size = 'medium', selected = false }: ClockProps) => (
  <Clock className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ClockIcon