import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Desktop } from "./Desktop.svg"

export interface DesktopProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const DesktopIcon = ({ size = 'medium', selected = false }: DesktopProps) => (
  <Desktop className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default DesktopIcon