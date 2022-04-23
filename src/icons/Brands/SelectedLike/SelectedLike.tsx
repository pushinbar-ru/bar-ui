import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as SelectedLike } from "./SelectedLike.svg"

export interface SelectedLikeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SelectedLikeIcon = ({ size = 'medium', selected = false }: SelectedLikeProps) => (
  <SelectedLike className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SelectedLikeIcon