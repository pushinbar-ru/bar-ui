import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Telegram } from "./Telegram.svg"

export interface TelegramProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const TelegramIcon = ({ size = 'medium', selected = false }: TelegramProps) => (
  <Telegram className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default TelegramIcon