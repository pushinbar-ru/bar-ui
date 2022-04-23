import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Image } from "./Image.svg"

export interface ImageProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ImageIcon = ({ size = 'medium', selected = false }: ImageProps) => (
  <Image className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ImageIcon