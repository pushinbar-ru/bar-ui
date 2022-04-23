import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as User } from "./User.svg"

export interface UserProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const UserIcon = ({ size = 'medium', selected = false }: UserProps) => (
  <User className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default UserIcon