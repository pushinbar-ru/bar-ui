import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Attach } from "./Attach.svg"

export interface AttachProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const AttachIcon = ({ size = 'medium', selected = false }: AttachProps) => (
  <Attach className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default AttachIcon