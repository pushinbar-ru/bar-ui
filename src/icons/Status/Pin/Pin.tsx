import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Pin } from "./Pin.svg"

export interface PinProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const PinIcon = ({ size = 'medium', selected = false }: PinProps) => (
  <Pin className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default PinIcon