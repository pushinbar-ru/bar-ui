import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Apps } from "./Apps.svg"

export interface AppsProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const AppsIcon = ({ size = 'medium', selected = false }: AppsProps) => (
  <Apps className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default AppsIcon