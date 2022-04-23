import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Login } from "./Login.svg"

export interface LoginProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const LoginIcon = ({ size = 'medium', selected = false }: LoginProps) => (
  <Login className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default LoginIcon