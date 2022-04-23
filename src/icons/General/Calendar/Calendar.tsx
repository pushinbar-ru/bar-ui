import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Calendar } from "./Calendar.svg"

export interface CalendarProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CalendarIcon = ({ size = 'medium', selected = false }: CalendarProps) => (
  <Calendar className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CalendarIcon