import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as History } from "./History.svg"

export interface HistoryProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const HistoryIcon = ({ size = 'medium', selected = false }: HistoryProps) => (
  <History className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default HistoryIcon