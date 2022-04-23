import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Invoice } from "./Invoice.svg"

export interface InvoiceProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const InvoiceIcon = ({ size = 'medium', selected = false }: InvoiceProps) => (
  <Invoice className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default InvoiceIcon