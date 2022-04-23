import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as ArrowLeft } from "./ArrowLeft.svg"

export interface ArrowLeftProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ArrowLeftIcon = ({ size = 'medium', selected = false }: ArrowLeftProps) => (
  <ArrowLeft className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ArrowLeftIcon