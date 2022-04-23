import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Send } from "./Send.svg"

export interface SendProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SendIcon = ({ size = 'medium', selected = false }: SendProps) => (
  <Send className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SendIcon