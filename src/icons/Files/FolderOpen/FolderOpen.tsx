import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as FolderOpen } from "./FolderOpen.svg"

export interface FolderOpenProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FolderOpenIcon = ({ size = 'medium', selected = false }: FolderOpenProps) => (
  <FolderOpen className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FolderOpenIcon