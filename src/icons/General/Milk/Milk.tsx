import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Milk } from "./Milk.svg"

export interface MilkProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const MilkIcon = ({ size = 'medium', selected = false }: MilkProps) => (
  <Milk className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default MilkIcon