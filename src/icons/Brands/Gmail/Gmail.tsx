import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Gmail } from "./Gmail.svg"

export interface GmailProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const GmailIcon = ({ size = 'medium', selected = false }: GmailProps) => (
  <Gmail className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default GmailIcon