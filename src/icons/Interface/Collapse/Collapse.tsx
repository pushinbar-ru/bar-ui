import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Collapse } from "./Collapse.svg"

export interface CollapseProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CollapseIcon = ({ size = 'medium', selected = false }: CollapseProps) => (
  <Collapse className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CollapseIcon