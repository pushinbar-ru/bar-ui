import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Like } from "./Like.svg"

export interface LikeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LikeIcon = ({ size = 'medium', selected = false }: LikeProps) => (
  <Like className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LikeIcon