import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Cancel } from "./Cancel.svg"

export interface CancelProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CancelIcon = ({ size = 'medium', selected = false }: CancelProps) => (
  <Cancel className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CancelIcon