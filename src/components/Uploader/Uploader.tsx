import React, { useState, useRef } from "react"
import "./Uploader.css"
import Button from "../Button";
import { Body, Text } from "../../typography";
import { CrossIcon } from "../../icons/Interface";
import { FolderOpenIcon } from "../../icons/Files";


export interface UploaderProps {
  name: string;
  title: string;
  dropMessage: string;
  dropIcon: JSX.Element;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onFileUpdate: (file: File) => void;
  accept?: string;
}

const Uploader = ({ name, title, dropMessage, dropIcon, opened, setOpened, onFileUpdate, accept }: UploaderProps) => {
  const [dragging, setDragging] = useState(false)
  const fileInputField = useRef<HTMLInputElement>(null);
  
  const handleUploaderCancel = () => setOpened(false)
  
  const handleDragStart = () => setDragging(true)
  const handleDragEnd = () => setDragging(false)

  const handleUploadClick = () => {
    fileInputField.current && fileInputField.current.click();
  };

  const callOnFileUpdate = (file: File) => {
    setOpened(false);
    onFileUpdate(file);
  };

  const handleNewFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      const file = files[0]
      callOnFileUpdate(file)
    }
  };

  return (
    <div className={"uploader" + (!opened ? '' : ' uploader_active')} onClick={handleUploaderCancel}>
      <div className="uploader__wrapper" onClick={(e) => e.stopPropagation()}>
        <Body className="uploader__title" bold>{title}</Body>
        <div className={"uploader__drop-zone" + (dragging ? ' uploader__drop-zone_dragging' : '')}>
          <input className="drop-zone__input" type="file" name={name} accept={accept} ref={fileInputField} title="" onChange={handleNewFileUpload} onDragLeave={handleDragEnd} onDrop={handleDragEnd} onDragEnter={handleDragStart} />
          {dropIcon}
          <Text className="uploader__message">{dropMessage}</Text>
          {dragging && (
            <div className="uploader__drag-over">
              <Body bold>Можете отпускать</Body>
            </div>
          )}
        </div>
        <div className="uploader__actions">
          <Button icon={<FolderOpenIcon />} className="uploader__save" onClick={handleUploadClick}>Выбрать на устройстве</Button>
          <Button color="transparent" className="uploader__undo" onClick={handleUploaderCancel}>Отменить</Button>
        </div>
        <Button color="transparent" size="large" icon={<CrossIcon />} className="uploader__cancel" onClick={handleUploaderCancel} />
      </div>
    </div>
  )
}

export default Uploader;