import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as OtherHorizontal } from "./OtherHorizontal.svg"

export interface OtherHorizontalProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const OtherHorizontalIcon = ({ size = 'medium', selected = false }: OtherHorizontalProps) => (
  <OtherHorizontal className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default OtherHorizontalIcon