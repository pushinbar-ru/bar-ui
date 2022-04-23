import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as BookMark } from "./BookMark.svg"

export interface BookMarkProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BookMarkIcon = ({ size = 'medium', selected = false }: BookMarkProps) => (
  <BookMark className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BookMarkIcon