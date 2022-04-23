import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Commen } from "./Commen.svg"

export interface CommenProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CommenIcon = ({ size = 'medium', selected = false }: CommenProps) => (
  <Commen className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CommenIcon