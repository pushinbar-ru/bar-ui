import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Add } from "./Add.svg"

export interface AddProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const AddIcon = ({ size = 'medium', selected = false }: AddProps) => (
  <Add className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default AddIcon