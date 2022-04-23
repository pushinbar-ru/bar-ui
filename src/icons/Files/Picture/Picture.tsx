import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Picture } from "./Picture.svg"

export interface PictureProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const PictureIcon = ({ size = 'medium', selected = false }: PictureProps) => (
  <Picture className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default PictureIcon