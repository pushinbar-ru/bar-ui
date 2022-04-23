import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Clipboard } from "./Clipboard.svg"

export interface ClipboardProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ClipboardIcon = ({ size = 'medium', selected = false }: ClipboardProps) => (
  <Clipboard className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ClipboardIcon