import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as MobilePhone } from "./MobilePhone.svg"

export interface MobilePhoneProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const MobilePhoneIcon = ({ size = 'medium', selected = false }: MobilePhoneProps) => (
  <MobilePhone className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default MobilePhoneIcon