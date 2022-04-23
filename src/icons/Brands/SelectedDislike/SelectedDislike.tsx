import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as SelectedDislike } from "./SelectedDislike.svg"

export interface SelectedDislikeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SelectedDislikeIcon = ({ size = 'medium', selected = false }: SelectedDislikeProps) => (
  <SelectedDislike className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SelectedDislikeIcon