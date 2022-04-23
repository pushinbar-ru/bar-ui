import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as UncheckedRadio } from "./UncheckedRadio.svg"

export interface UncheckedRadioProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const UncheckedRadioIcon = ({ size = 'medium', selected = false }: UncheckedRadioProps) => (
  <UncheckedRadio className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default UncheckedRadioIcon