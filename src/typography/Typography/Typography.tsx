import React from "react";
import './Typography.css'
import { addAdditionalClasses } from "../helpers/addAdditionalClasses";

export interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'header' | 'caption';
    wide?: boolean;
    bold?: boolean;
    size?: 'large' | 'medium' | 'small';
    children?: React.ReactNode;
}

const Typography = ({ variant, wide, bold, size = 'medium', children }: TypographyProps) => {
    switch (variant) {
        case ('h1'):
            return (<h1 className="h1">{children}</h1>)
        case ('h2'):
            return (<h2 className="h2">{children}</h2>)
        case ('h3'):
            return (<h3 className="h3">{children}</h3>)
        case ('header'):
            return (<div className={`header header_${size}`}>{children}</div>)
        case ('caption'):
            return (<p className={'caption' + addAdditionalClasses('caption', wide, bold)}>{children}</p>)
        default:
            return (<p>{children}</p>)
    }
}

export default Typography;