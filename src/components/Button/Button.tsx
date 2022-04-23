import React from "react"
import "./Button.css"

export interface ButtonProps {
  size?: 'large' | 'medium' | 'small';
  color?: 'white' | 'black' | 'green' | 'red' | 'blue' | 'transparent';
  icon?: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ size = 'medium', color = 'white', icon, onClick, disabled = false, className, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className={(`button button_${size} button_${color}`) + (icon ? ' button_with-icon' : '') + (children ? '' : ' button_without-text') + (className ? ` ${className}` : '')}
    disabled={disabled}
  >
    {icon}
    {children}
  </button>
)

export default Button;