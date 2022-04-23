import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Folder } from "./Folder.svg"

export interface FolderProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FolderIcon = ({ size = 'medium', selected = false }: FolderProps) => (
  <Folder className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FolderIcon