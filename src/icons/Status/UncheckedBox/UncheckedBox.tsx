import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as UncheckedBox } from "./UncheckedBox.svg"

export interface UncheckedBoxProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const UncheckedBoxIcon = ({ size = 'medium', selected = false }: UncheckedBoxProps) => (
  <UncheckedBox className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default UncheckedBoxIcon