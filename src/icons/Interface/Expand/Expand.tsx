import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Expand } from "./Expand.svg"

export interface ExpandProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ExpandIcon = ({ size = 'medium', selected = false }: ExpandProps) => (
  <Expand className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ExpandIcon