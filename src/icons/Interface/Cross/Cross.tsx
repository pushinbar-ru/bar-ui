import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Cross } from "./Cross.svg"

export interface CrossProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CrossIcon = ({ size = 'medium', selected = false }: CrossProps) => (
  <Cross className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CrossIcon