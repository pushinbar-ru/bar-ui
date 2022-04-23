import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CheckedRadio } from "./CheckedRadio.svg"

export interface CheckedRadioProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CheckedRadioIcon = ({ size = 'medium', selected = false }: CheckedRadioProps) => (
  <CheckedRadio className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CheckedRadioIcon