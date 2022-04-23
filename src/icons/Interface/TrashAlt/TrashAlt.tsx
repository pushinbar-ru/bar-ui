import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as TrashAlt } from "./TrashAlt.svg"

export interface TrashAltProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const TrashAltIcon = ({ size = 'medium', selected = false }: TrashAltProps) => (
  <TrashAlt className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default TrashAltIcon