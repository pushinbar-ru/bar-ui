import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Lightbulb } from "./Lightbulb.svg"

export interface LightbulbProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LightbulbIcon = ({ size = 'medium', selected = false }: LightbulbProps) => (
  <Lightbulb className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LightbulbIcon