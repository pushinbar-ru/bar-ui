import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Box } from "./Box.svg"

export interface BoxProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BoxIcon = ({ size = 'medium', selected = false }: BoxProps) => (
  <Box className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BoxIcon