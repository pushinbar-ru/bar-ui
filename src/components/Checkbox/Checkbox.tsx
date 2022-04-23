import React from "react"
import "./Checkbox.css"
import { UncheckedBoxIcon, CheckedBoxIcon } from "../../icons/Status";


export interface CheckboxProps {
  name: string;
  label: string | number;
  value?: string | number;
  id?: string;
  defaultChecked?: boolean;
}

const Checkbox = ({ name, label, value = label, id = `${name}_${value}`, defaultChecked = false }: CheckboxProps) => (
  <>
    <input className="checkbox" type='checkbox' name={name} value={value} id={id} defaultChecked={defaultChecked} />
    <div className="checkbox__wrapper">
      <div className="checkbox__icons">
        <UncheckedBoxIcon size="large" />
        <CheckedBoxIcon size="large" />
      </div>
      <label className="checkbox__label" htmlFor={id}>{label}</label>
    </div>
  </>
)

export default Checkbox;