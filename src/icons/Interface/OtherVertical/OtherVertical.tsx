import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as OtherVertical } from "./OtherVertical.svg"

export interface OtherVerticalProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const OtherVerticalIcon = ({ size = 'medium', selected = false }: OtherVerticalProps) => (
  <OtherVertical className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default OtherVerticalIcon