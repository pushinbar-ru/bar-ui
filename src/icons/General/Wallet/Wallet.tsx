import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Wallet } from "./Wallet.svg"

export interface WalletProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const WalletIcon = ({ size = 'medium', selected = false }: WalletProps) => (
  <Wallet className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default WalletIcon