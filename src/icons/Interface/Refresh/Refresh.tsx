import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Refresh } from "./Refresh.svg"

export interface RefreshProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const RefreshIcon = ({ size = 'medium', selected = false }: RefreshProps) => (
  <Refresh className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default RefreshIcon