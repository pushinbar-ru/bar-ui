import React from "react"
import "./Selector.css"

export interface SelectorProps {
  name: string;
  leftLabel: string | number;
  leftValue?: string | number;
  rightLabel: string | number;
  rightValue?: string | number;
}

const Selector = ({ name, leftLabel, leftValue = leftLabel, rightLabel, rightValue = rightLabel }: SelectorProps) => (
  <div className='selector'>
    <input type='radio' name={name} id="selector_left" value={leftValue} defaultChecked />
    <label htmlFor="selector_left">{leftLabel}</label>
    <input type='radio' name={name} id="selector_right" value={rightValue} />
    <label htmlFor="selector_right">{rightLabel}</label>
  </div>
)

export default Selector;