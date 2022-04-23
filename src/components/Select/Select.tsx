import React, { useState } from "react"
import "./Select.css"
import { CaretDownIcon } from "../../icons/Interface";
import { SelectItemProps } from "../SelectItem/SelectItem";

export interface SelectProps {
  name: string;
  label: string;
  required?: boolean;
  requiredMessage?: string;
  children: React.ReactNode
}

const Select = ({ name, label, required, requiredMessage = 'Это обязательное поле', children }: SelectProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [value, setValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [opened, setOpened] = useState(false)

  const handleSelectClick = () => {
    setOpened(!opened)
  }

  const handleFocusBlur = () => {
    if (required) {
      value ? setErrorMessage('') : setErrorMessage(requiredMessage)
    }
  }

  return (<div className={'select__float-label' + (errorMessage ? ' select__float-label_error' : '')}>
    <label className={'select__label' + (isEmpty ? '' : ' select__label_active')} htmlFor={name}>{label}</label>
    <div className={'select' + (errorMessage ? ' select_error' : '') + (opened ? ' select_opened' : '')} tabIndex={0} onClick={handleSelectClick} onBlur={handleFocusBlur}>
      <input tabIndex={-1} name={name} value={value} onChange={() => {}} required={required} aria-hidden={true} />
      <CaretDownIcon size="large" />
      <ul className='select__items'>
        {React.Children.map(children, child => {
          if (!React.isValidElement<SelectItemProps>(child)) {
            return child
          }
          return React.cloneElement(child, {
            onClick: (e: React.MouseEvent<HTMLLIElement>) => {
              setIsEmpty(false)
              setErrorMessage('')
              setValue(e.currentTarget.dataset['value'] || '')
              document.querySelector('.select-item_selected')?.classList.remove("select-item_selected")
              e.currentTarget.classList.add("select-item_selected")
            }
          })
        })}
      </ul>
    </div>
    {errorMessage !== '' && (<div className="select__error">{errorMessage}</div>)}
  </div>
)}

export default Select;