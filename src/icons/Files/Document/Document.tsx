import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Document } from "./Document.svg"

export interface DocumentProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const DocumentIcon = ({ size = 'medium', selected = false }: DocumentProps) => (
  <Document className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default DocumentIcon