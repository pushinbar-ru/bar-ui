import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Cursor } from "./Cursor.svg"

export interface CursorProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CursorIcon = ({ size = 'medium', selected = false }: CursorProps) => (
  <Cursor className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CursorIcon