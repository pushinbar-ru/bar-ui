import React, { useState } from "react"
import "./Input.css"
import { CopyIcon } from "../../icons/Files";
import { CheckIcon } from "../../icons/Interface";

export interface InputProps {
  name: string;
  placeholder?: string;
  withCopy?: boolean;
  required?: boolean;
  requiredMessage?: string;
}

const Input = ({ name, placeholder = '', withCopy = false, required = false, requiredMessage = 'Это обязательное поле' }: InputProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [value, setValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);
    if (text) {
      setIsEmpty(false)
      setErrorMessage('')
    } else {
      setIsEmpty(true)
    };
  }

  const handleFocusBlur = () => {
    if (required) {
      value ? setErrorMessage('') : setErrorMessage(requiredMessage)
    }
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.classList.add('clipboard_copied')
    setTimeout(() => { button.classList.remove('clipboard_copied') }, 1500)
    navigator.clipboard.writeText(value)
      .catch(err => {
        console.log('Скопировать в буфер не удалось', err);
      });
  }
  
  return (
    <div className={'float-label' + (errorMessage ? ' float-label_error' : '')}>
      <label className={'label' + (isEmpty ? '' : ' label_active')} htmlFor={name}>{placeholder}</label>
      <input className={'input' + (errorMessage ? ' input_error' : '')} type='text' name={name} onChange={handleTextChange} onBlur={handleFocusBlur} value={value} required={required} />
      {withCopy && (<button className="clipboard" onClick={handleButtonClick} tabIndex={-1}><CopyIcon size="large" /><CheckIcon size="large" /></button>)}
      {errorMessage !== '' && (<div className="error">{errorMessage}</div>)}
    </div>
  )
}

export default Input;