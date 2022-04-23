import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Dislike } from "./Dislike.svg"

export interface DislikeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const DislikeIcon = ({ size = 'medium', selected = false }: DislikeProps) => (
  <Dislike className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default DislikeIcon