import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as EnvelopeOpen } from "./EnvelopeOpen.svg"

export interface EnvelopeOpenProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const EnvelopeOpenIcon = ({ size = 'medium', selected = false }: EnvelopeOpenProps) => (
  <EnvelopeOpen className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default EnvelopeOpenIcon