import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ZoomOut } from "./ZoomOut.svg"

export interface ZoomOutProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ZoomOutIcon = ({ size = 'medium', selected = false }: ZoomOutProps) => (
  <ZoomOut className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ZoomOutIcon