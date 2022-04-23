import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Trash } from "./Trash.svg"

export interface TrashProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const TrashIcon = ({ size = 'medium', selected = false }: TrashProps) => (
  <Trash className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default TrashIcon