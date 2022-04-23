import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ZoomIn } from "./ZoomIn.svg"

export interface ZoomInProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ZoomInIcon = ({ size = 'medium', selected = false }: ZoomInProps) => (
  <ZoomIn className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ZoomInIcon