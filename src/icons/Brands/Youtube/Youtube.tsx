import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Youtube } from "./Youtube.svg"

export interface YoutubeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const YoutubeIcon = ({ size = 'medium', selected = false }: YoutubeProps) => (
  <Youtube className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default YoutubeIcon