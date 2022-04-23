import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Instagram } from "./Instagram.svg"

export interface InstagramProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const InstagramIcon = ({ size = 'medium', selected = false }: InstagramProps) => (
  <Instagram className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default InstagramIcon