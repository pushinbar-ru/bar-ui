import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CheckedBox } from "./CheckedBox.svg"

export interface CheckedBoxProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CheckedBoxIcon = ({ size = 'medium', selected = false }: CheckedBoxProps) => (
  <CheckedBox className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CheckedBoxIcon