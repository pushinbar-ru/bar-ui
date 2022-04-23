import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Logout } from "./Logout.svg"

export interface LogoutProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LogoutIcon = ({ size = 'medium', selected = false }: LogoutProps) => (
  <Logout className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LogoutIcon