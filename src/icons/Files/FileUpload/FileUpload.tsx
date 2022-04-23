import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as FileUpload } from "./FileUpload.svg"

export interface FileUploadProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FileUploadIcon = ({ size = 'medium', selected = false }: FileUploadProps) => (
  <FileUpload className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FileUploadIcon