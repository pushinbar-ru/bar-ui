import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Backspace } from "./Backspace.svg"

export interface BackspaceProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BackspaceIcon = ({ size = 'medium', selected = false }: BackspaceProps) => (
  <Backspace className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BackspaceIcon