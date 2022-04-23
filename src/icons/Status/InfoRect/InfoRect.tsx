import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as InfoRect } from "./InfoRect.svg"

export interface InfoRectProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const InfoRectIcon = ({ size = 'medium', selected = false }: InfoRectProps) => (
  <InfoRect className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default InfoRectIcon