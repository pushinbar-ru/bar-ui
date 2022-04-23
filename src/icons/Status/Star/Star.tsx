import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Star } from "./Star.svg"

export interface StarProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const StarIcon = ({ size = 'medium', selected = false }: StarProps) => (
  <Star className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default StarIcon