import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Twitter } from "./Twitter.svg"

export interface TwitterProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const TwitterIcon = ({ size = 'medium', selected = false }: TwitterProps) => (
  <Twitter className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default TwitterIcon