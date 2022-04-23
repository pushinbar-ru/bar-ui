import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as InfoCircle } from "./InfoCircle.svg"

export interface InfoCircleProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const InfoCircleIcon = ({ size = 'medium', selected = false }: InfoCircleProps) => (
  <InfoCircle className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default InfoCircleIcon