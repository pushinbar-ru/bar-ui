import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Bookmark } from "./Bookmark.svg"

export interface BookmarkProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const BookmarkIcon = ({ size = 'medium', selected = false }: BookmarkProps) => (
  <Bookmark className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default BookmarkIcon