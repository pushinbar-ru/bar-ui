import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Exchange } from "./Exchange.svg"

export interface ExchangeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const ExchangeIcon = ({ size = 'medium', selected = false }: ExchangeProps) => (
  <Exchange className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default ExchangeIcon