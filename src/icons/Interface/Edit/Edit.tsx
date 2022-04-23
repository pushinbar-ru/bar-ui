import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Edit } from "./Edit.svg"

export interface EditProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const EditIcon = ({ size = 'medium', selected = false }: EditProps) => (
  <Edit className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default EditIcon