import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Move } from "./Move.svg"

export interface MoveProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const MoveIcon = ({ size = 'medium', selected = false }: MoveProps) => (
  <Move className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default MoveIcon