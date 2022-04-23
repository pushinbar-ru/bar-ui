import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as LockTime } from "./LockTime.svg"

export interface LockTimeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LockTimeIcon = ({ size = 'medium', selected = false }: LockTimeProps) => (
  <LockTime className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LockTimeIcon