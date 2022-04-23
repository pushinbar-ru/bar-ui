import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Unlock } from "./Unlock.svg"

export interface UnlockProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const UnlockIcon = ({ size = 'medium', selected = false }: UnlockProps) => (
  <Unlock className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default UnlockIcon