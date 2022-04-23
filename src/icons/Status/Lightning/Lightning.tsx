import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Lightning } from "./Lightning.svg"

export interface LightningProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LightningIcon = ({ size = 'medium', selected = false }: LightningProps) => (
  <Lightning className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LightningIcon