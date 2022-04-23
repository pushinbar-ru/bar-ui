import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as File } from "./File.svg"

export interface FileProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FileIcon = ({ size = 'medium', selected = false }: FileProps) => (
  <File className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FileIcon