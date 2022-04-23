import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CaretRight } from "./CaretRight.svg"

export interface CaretRightProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CaretRightIcon = ({ size = 'medium', selected = false }: CaretRightProps) => (
  <CaretRight className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CaretRightIcon