import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as SettingsAlt } from "./SettingsAlt.svg"

export interface SettingsAltProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SettingsAltIcon = ({ size = 'medium', selected = false }: SettingsAltProps) => (
  <SettingsAlt className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SettingsAltIcon