import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as InfoTriangle } from "./InfoTriangle.svg"

export interface InfoTriangleProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const InfoTriangleIcon = ({ size = 'medium', selected = false }: InfoTriangleProps) => (
  <InfoTriangle className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default InfoTriangleIcon