import React from "react"
import "./Label.css"

export interface LabelProps {
  size?: 'large' | 'medium' | 'small';
  selected?: boolean;
  icon?: JSX.Element;
  children?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Label = ({ size = 'medium', selected, icon, children, iconPosition = 'left' }: LabelProps) => (
  <span className={`label label_${size}` + (selected ? ' label_selected' : '')}>
    {iconPosition === 'left' && icon}
    {children}
    {iconPosition === 'right' && icon}
  </span>
)

export default Label;