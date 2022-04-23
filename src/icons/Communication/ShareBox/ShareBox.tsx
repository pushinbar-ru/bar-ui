import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ShareBox } from "./ShareBox.svg"

export interface ShareBoxProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ShareBoxIcon = ({ size = 'medium', selected = false }: ShareBoxProps) => (
  <ShareBox className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ShareBoxIcon