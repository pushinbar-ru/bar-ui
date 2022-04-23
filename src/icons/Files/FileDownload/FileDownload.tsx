import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as FileDownload } from "./FileDownload.svg"

export interface FileDownloadProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FileDownloadIcon = ({ size = 'medium', selected = false }: FileDownloadProps) => (
  <FileDownload className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FileDownloadIcon