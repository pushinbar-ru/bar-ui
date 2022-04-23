import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as CloudDownload } from "./CloudDownload.svg"

export interface CloudDownloadProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const CloudDownloadIcon = ({ size = 'medium', selected = false }: CloudDownloadProps) => (
  <CloudDownload className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default CloudDownloadIcon