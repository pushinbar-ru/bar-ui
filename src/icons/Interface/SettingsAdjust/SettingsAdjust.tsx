import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as SettingsAdjust } from "./SettingsAdjust.svg"

export interface SettingsAdjustProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SettingsAdjustIcon = ({ size = 'medium', selected = false }: SettingsAdjustProps) => (
  <SettingsAdjust className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SettingsAdjustIcon