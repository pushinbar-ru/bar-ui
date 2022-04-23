import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Download } from "./Download.svg"

export interface DownloadProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const DownloadIcon = ({ size = 'medium', selected = false }: DownloadProps) => (
  <Download className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default DownloadIcon