import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Rows } from "./Rows.svg"

export interface RowsProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const RowsIcon = ({ size = 'medium', selected = false }: RowsProps) => (
  <Rows className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default RowsIcon