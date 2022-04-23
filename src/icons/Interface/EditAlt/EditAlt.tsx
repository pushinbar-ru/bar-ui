import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as EditAlt } from "./EditAlt.svg"

export interface EditAltProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const EditAltIcon = ({ size = 'medium', selected = false }: EditAltProps) => (
  <EditAlt className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default EditAltIcon