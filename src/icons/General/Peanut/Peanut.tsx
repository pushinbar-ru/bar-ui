import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Peanut } from "./Peanut.svg"

export interface PeanutProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const PeanutIcon = ({ size = 'medium', selected = false }: PeanutProps) => (
  <Peanut className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default PeanutIcon