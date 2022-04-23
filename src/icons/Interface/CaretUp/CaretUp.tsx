import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CaretUp } from "./CaretUp.svg"

export interface CaretUpProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CaretUpIcon = ({ size = 'medium', selected = false }: CaretUpProps) => (
  <CaretUp className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CaretUpIcon