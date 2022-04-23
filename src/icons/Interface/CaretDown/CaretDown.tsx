import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CaretDown } from "./CaretDown.svg"

export interface CaretDownProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CaretDownIcon = ({ size = 'medium', selected = false }: CaretDownProps) => (
  <CaretDown className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CaretDownIcon