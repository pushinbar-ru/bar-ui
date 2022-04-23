import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Share } from "./Share.svg"

export interface ShareProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ShareIcon = ({ size = 'medium', selected = false }: ShareProps) => (
  <Share className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ShareIcon