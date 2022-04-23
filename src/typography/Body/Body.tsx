import React from "react";
import './Body.css'
import { addAdditionalClasses } from "../helpers/addAdditionalClasses";

export interface BodyProps {
    wide?: boolean;
    bold?: boolean;
    size?: 'large' | 'medium' | 'small';
    className?: string;
    children?: React.ReactNode;
}

const Body = ({ wide, bold, size = 'medium', className, children }: BodyProps) => (
  <p className={`body body_${size} ${addAdditionalClasses(`body_${size}`, wide, bold)}` + (className ? ` ${className}` : '')}>{children}</p>
)

export default Body;