import React from "react"
import "./Radio.css"
import { UncheckedRadioIcon, CheckedRadioIcon } from "../../icons/Status/";


export interface RadioProps {
  name: string;
  label: string | number;
  value?: string | number;
  id?: string;
  defaultChecked?: boolean;
}

const Radio = ({ name, label, value = label, id = `${name}_${value}`, defaultChecked = false }: RadioProps) => (
  <>
    <input className="radio" type='radio' name={name} value={value} id={id} defaultChecked={defaultChecked} />
    <div className="radio__wrapper">
      <div className="radio__icons">
        <UncheckedRadioIcon size="large" />
        <CheckedRadioIcon size="large" />
      </div>
      <label className="radio__label" htmlFor={id}>{label}</label>
    </div>
  </>
)

export default Radio;