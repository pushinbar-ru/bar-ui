import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Printer } from "./Printer.svg"

export interface PrinterProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const PrinterIcon = ({ size = 'medium', selected = false }: PrinterProps) => (
  <Printer className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default PrinterIcon