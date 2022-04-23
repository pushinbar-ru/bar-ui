import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ClipboardAlt } from "./ClipboardAlt.svg"

export interface ClipboardAltProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ClipboardAltIcon = ({ size = 'medium', selected = false }: ClipboardAltProps) => (
  <ClipboardAlt className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ClipboardAltIcon