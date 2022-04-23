import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CloudUpload } from "./CloudUpload.svg"

export interface CloudUploadProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CloudUploadIcon = ({ size = 'medium', selected = false }: CloudUploadProps) => (
  <CloudUpload className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CloudUploadIcon