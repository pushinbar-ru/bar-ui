import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as EyeClosed } from "./EyeClosed.svg"

export interface EyeClosedProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const EyeClosedIcon = ({ size = 'medium', selected = false }: EyeClosedProps) => (
  <EyeClosed className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default EyeClosedIcon