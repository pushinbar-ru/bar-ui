import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Bank } from "./Bank.svg"

export interface BankProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BankIcon = ({ size = 'medium', selected = false }: BankProps) => (
  <Bank className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BankIcon