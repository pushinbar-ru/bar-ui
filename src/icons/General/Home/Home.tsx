import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Home } from "./Home.svg"

export interface HomeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const HomeIcon = ({ size = 'medium', selected = false }: HomeProps) => (
  <Home className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default HomeIcon