import React from "react";
import './Text.css'
import { addAdditionalClasses } from "../helpers/addAdditionalClasses";

export interface TextProps {
    wide?: boolean;
    bold?: boolean;
    size?: 'large' | 'medium' | 'small';
    className?: string;
    children?: React.ReactNode;
}

const Text = ({ wide, bold, size = 'medium', className, children }: TextProps) => (
    <p className={`text text_${size} ${addAdditionalClasses(`text_${size}`, wide, bold)}` + (className ? ` ${className}` : '')}>{children}</p>
)

export default Text;