import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Copy } from "./Copy.svg"

export interface CopyProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CopyIcon = ({ size = 'medium', selected = false }: CopyProps) => (
  <Copy className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CopyIcon