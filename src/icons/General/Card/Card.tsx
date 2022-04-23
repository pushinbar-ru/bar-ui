import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Card } from "./Card.svg"

export interface CardProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CardIcon = ({ size = 'medium', selected = false }: CardProps) => (
  <Card className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CardIcon