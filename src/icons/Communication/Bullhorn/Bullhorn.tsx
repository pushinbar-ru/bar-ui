import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Bullhorn } from "./Bullhorn.svg"

export interface BullhornProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BullhornIcon = ({ size = 'medium', selected = false }: BullhornProps) => (
  <Bullhorn className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BullhornIcon