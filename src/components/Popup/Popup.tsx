import React, { useEffect } from "react"
import "./Popup.css"
import Button from "../Button";
import { CrossIcon } from "../../icons/Interface";


export interface PopupProps {
  message: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onUndo?: () => void;
  lifetimeInMs?: number;
}

const Popup = ({ message, opened, setOpened, onUndo, lifetimeInMs }: PopupProps) => {
  useEffect(() => { lifetimeInMs && opened && setTimeout(() => setOpened(false), lifetimeInMs) }, [lifetimeInMs, opened, setOpened])

  return (
    <div className={"popup" + (!opened ? '' : ' popup_active')}>
      <div className="popup__wrapper">
        <span className="popup__message">{message}</span>
        {onUndo && <Button color="transparent" className="popup__undo" onClick={onUndo}>Отменить</Button>}
        <Button color="transparent" size="large" icon={<CrossIcon />} className="popup__cancel" onClick={() => setOpened(false)} />
      </div>
    </div>
  )
}

export default Popup;