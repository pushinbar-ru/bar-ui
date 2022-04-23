import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Save } from "./Save.svg"

export interface SaveProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SaveIcon = ({ size = 'medium', selected = false }: SaveProps) => (
  <Save className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SaveIcon