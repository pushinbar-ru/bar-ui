import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Envelope } from "./Envelope.svg"

export interface EnvelopeProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const EnvelopeIcon = ({ size = 'medium', selected = false }: EnvelopeProps) => (
  <Envelope className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default EnvelopeIcon