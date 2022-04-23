import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as FileUser } from "./FileUser.svg"

export interface FileUserProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FileUserIcon = ({ size = 'medium', selected = false }: FileUserProps) => (
  <FileUser className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FileUserIcon