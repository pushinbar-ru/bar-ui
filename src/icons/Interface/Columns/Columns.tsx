import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Columns } from "./Columns.svg"

export interface ColumnsProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ColumnsIcon = ({ size = 'medium', selected = false }: ColumnsProps) => (
  <Columns className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ColumnsIcon