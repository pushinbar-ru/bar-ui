import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Lock } from "./Lock.svg"

export interface LockProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LockIcon = ({ size = 'medium', selected = false }: LockProps) => (
  <Lock className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LockIcon