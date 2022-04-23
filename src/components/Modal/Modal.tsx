import React from "react"
import "./Modal.css"
import Button from "../Button";
import { Body, Text } from "../../typography";
import { CrossIcon } from "../../icons/Interface";


export interface ModalProps {
  title: string;
  message: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
}

const Modal = ({ title, message, opened, setOpened, onSave }: ModalProps) => {
  const handleModalCancel = () => setOpened(false)

  return (
    <div className={"modal" + (!opened ? '' : ' modal_active')} onClick={handleModalCancel}>
      <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
        <Body className="modal__title" bold>{title}</Body>
        <Text className="modal__message">{message}</Text>
        <div className="modal__actions">
          <Button className="modal__save" onClick={onSave}>Сохранить</Button>
          <Button color="transparent" className="modal__undo" onClick={handleModalCancel}>Отменить</Button>
        </div>
        <Button color="transparent" size="large" icon={<CrossIcon />} className="modal__cancel" onClick={handleModalCancel} />
      </div>
    </div>
  )
}

export default Modal;