import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Vk } from "./Vk.svg"

export interface VkProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const VkIcon = ({ size = 'medium', selected = false }: VkProps) => (
  <Vk className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default VkIcon