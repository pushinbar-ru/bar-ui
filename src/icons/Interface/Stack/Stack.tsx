import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Stack } from "./Stack.svg"

export interface StackProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const StackIcon = ({ size = 'medium', selected = false }: StackProps) => (
  <Stack className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default StackIcon