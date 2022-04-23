import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Layout } from "./Layout.svg"

export interface LayoutProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LayoutIcon = ({ size = 'medium', selected = false }: LayoutProps) => (
  <Layout className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LayoutIcon