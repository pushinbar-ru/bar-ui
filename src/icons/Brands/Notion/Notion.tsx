import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Notion } from "./Notion.svg"

export interface NotionProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const NotionIcon = ({ size = 'medium', selected = false }: NotionProps) => (
  <Notion className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default NotionIcon