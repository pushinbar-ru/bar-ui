import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Plus } from "./Plus.svg"

export interface PlusProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const PlusIcon = ({ size = 'medium', selected = false }: PlusProps) => (
  <Plus className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default PlusIcon